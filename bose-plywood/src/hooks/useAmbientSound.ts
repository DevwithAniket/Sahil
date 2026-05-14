import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Subtle Japanese-inspired ambient soundscape — Web Audio API.
 *
 * Layers (all quiet, designed to sit in the background):
 *  1. Deep wind — heavy lowpass-filtered noise
 *  2. Leaf rustle — gentle highpass bursts, modulated by slow LFO
 *  3. Koto melody — pentatonic notes on soft sine with reverb tail
 *  4. Pad drone — detuned sine pair forming a warm A-minor bed
 */
export function useAmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.15)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const masterGainRef = useRef<GainNode | null>(null)
  const convolverRef = useRef<ConvolverNode | null>(null)
  const sourceNodes = useRef<AudioBufferSourceNode[]>([])
  const oscNodes = useRef<OscillatorNode[]>([])
  const timerIds = useRef<number[]>([])
  const volumeRef = useRef(volume)

  // Keep ref in sync
  useEffect(() => {
    volumeRef.current = volume
  }, [volume])

  /** Stereo noise buffer, duration seconds, loop-ready */
  function makeNoise(ctx: AudioContext, dur = 4): AudioBuffer {
    const sr = ctx.sampleRate
    const len = sr * dur
    const buf = ctx.createBuffer(2, len, sr)
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c)
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
    }
    return buf
  }

  /** Synthetic hall impulse response */
  function makeIR(ctx: AudioContext): AudioBuffer {
    const sr = ctx.sampleRate
    const len = Math.floor(sr * 1.8)
    const buf = ctx.createBuffer(2, len, sr)
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c)
      for (let i = 0; i < len; i++) {
        const t = i / sr
        d[i] =
          (Math.random() * 2 - 1) *
          Math.exp(-4 * t) *
          (1 + 0.3 * Math.sin(2 * Math.PI * 7.3 * t + c))
      }
    }
    return buf
  }

  /* ---- tear down everything ---- */
  const reset = useCallback(() => {
    timerIds.current.forEach(clearTimeout)
    timerIds.current = []

    oscNodes.current.forEach((o) => {
      try {
        o.stop()
      } catch {
        /* already stopped */
      }
      try {
        o.disconnect()
      } catch {
        /* ok */
      }
    })
    oscNodes.current = []

    sourceNodes.current.forEach((s) => {
      try {
        s.stop()
      } catch {
        /* ok */
      }
      try {
        s.disconnect()
      } catch {
        /* ok */
      }
    })
    sourceNodes.current = []

    if (convolverRef.current) {
      try {
        convolverRef.current.disconnect()
      } catch {
        /* ok */
      }
      convolverRef.current = null
    }

    if (masterGainRef.current) {
      try {
        masterGainRef.current.disconnect()
      } catch {
        /* ok */
      }
      masterGainRef.current = null
    }

    if (audioCtxRef.current) {
      if (audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {})
      }
      audioCtxRef.current = null
    }
  }, [])

  /* ---- start ---- */
  const start = useCallback(async () => {
    reset() // fresh slate

    try {
      const AC = window.AudioContext || (window as any).webkitAudioContext
      const ctx = new AC()
      audioCtxRef.current = ctx

      if (ctx.state === 'suspended') {
        await ctx.resume()
      }

      // master gain
      const mg = ctx.createGain()
      mg.gain.value = volumeRef.current
      mg.connect(ctx.destination)
      masterGainRef.current = mg

      // reverb
      const conv = ctx.createConvolver()
      conv.buffer = makeIR(ctx)
      convolverRef.current = conv

      const wet = ctx.createGain()
      wet.gain.value = 0.35
      conv.connect(wet).connect(mg)

      const dry = ctx.createGain()
      dry.gain.value = 0.65
      dry.connect(mg)

      // ---- 1) WIND ----
      const windSrc = ctx.createBufferSource()
      windSrc.buffer = makeNoise(ctx, 6)
      windSrc.loop = true

      const windLP = ctx.createBiquadFilter()
      windLP.type = 'lowpass'
      windLP.frequency.value = 500
      windLP.Q.value = 0.3

      const windG = ctx.createGain()
      windG.gain.value = 0.18

      windSrc.connect(windLP).connect(windG).connect(dry)
      sourceNodes.current.push(windSrc)
      windSrc.start()

      const wLfo = ctx.createOscillator()
      wLfo.type = 'sine'
      wLfo.frequency.value = 0.025
      const wLG = ctx.createGain()
      wLG.gain.value = 250
      wLfo.connect(wLG).connect(windLP.frequency)
      oscNodes.current.push(wLfo)
      wLfo.start()

      // ---- 2) LEAVES ----
      const leafSrc = ctx.createBufferSource()
      leafSrc.buffer = makeNoise(ctx, 4)
      leafSrc.loop = true

      const leafHP = ctx.createBiquadFilter()
      leafHP.type = 'highpass'
      leafHP.frequency.value = 1800

      const leafG = ctx.createGain()
      leafG.gain.value = 0

      leafSrc.connect(leafHP).connect(leafG).connect(dry)
      sourceNodes.current.push(leafSrc)
      leafSrc.start()

      const lLfo = ctx.createOscillator()
      lLfo.type = 'sine'
      lLfo.frequency.value = 0.25
      const lLG = ctx.createGain()
      lLG.gain.value = 0.06
      const lOff = ctx.createConstantSource()
      lOff.offset.value = 0.04

      lLfo.connect(lLG).connect(leafG.gain)
      lOff.connect(leafG.gain)
      oscNodes.current.push(lLfo, lOff)
      lLfo.start()
      lOff.start()

      // ---- 3) PAD DRONE ----
      function pad(freq: number, det: number) {
        const o = ctx.createOscillator()
        o.type = 'triangle'
        o.frequency.value = freq
        o.detune.value = det
        const g = ctx.createGain()
        g.gain.value = 0.022
        const lp = ctx.createBiquadFilter()
        lp.type = 'lowpass'
        lp.frequency.value = 500
        o.connect(lp).connect(g).connect(dry)
        o.connect(lp).connect(g).connect(conv)
        o.start()
        oscNodes.current.push(o)
      }
      pad(110, -3)
      pad(110, 3)
      pad(165, -2)
      pad(165, 2)

      // ---- 4) MELODY ----
      const melG = ctx.createGain()
      melG.gain.value = 0.0005
      melG.connect(dry)
      melG.connect(conv)

      const melOsc = ctx.createOscillator()
      melOsc.type = 'sine'
      melOsc.frequency.value = 220
      melOsc.connect(melG)
      oscNodes.current.push(melOsc)
      melOsc.start()

      const scale = [220, 261.63, 293.66, 329.63, 392, 440, 392, 329.63, 293.66, 261.63]
      let idx = 0

      const next = () => {
        if (audioCtxRef.current?.state !== 'running') return
        idx = (idx + 1) % scale.length
        const t = audioCtxRef.current!.currentTime
        melOsc.frequency.setTargetAtTime(scale[idx], t, 1.0)
        melG.gain.cancelScheduledValues(t)
        melG.gain.setValueAtTime(0.0005, t)
        melG.gain.linearRampToValueAtTime(0.03 + Math.random() * 0.02, t + 0.3)
        melG.gain.linearRampToValueAtTime(0.0005, t + 5)
        timerIds.current.push(
          setTimeout(next, 4000 + Math.random() * 3000) as any,
        )
      }
      timerIds.current.push(setTimeout(next, 800) as any)

      setIsPlaying(true)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Ambient sound failed:', e)
      setIsPlaying(false)
    }
  }, [reset])

  /* ---- stop ---- */
  const stop = useCallback(() => {
    reset()
    setIsPlaying(false)
  }, [reset])

  /* ---- toggle ---- */
  const toggleSound = useCallback(() => {
    if (isPlaying) {
      stop()
    } else {
      start()
    }
  }, [isPlaying, start, stop])

  /* ---- volume ---- */
  const updateVolume = useCallback(
    (v: number) => {
      setVolume(v)
      if (masterGainRef.current && audioCtxRef.current) {
        try {
          masterGainRef.current.gain.setTargetAtTime(
            v,
            audioCtxRef.current.currentTime,
            0.08,
          )
        } catch {
          /* ok */
        }
      }
    },
    [],
  )

  /* ---- unmount ---- */
  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  return { isPlaying, volume, toggleSound, updateVolume }
}