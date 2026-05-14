import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { useAmbientSound } from '@/hooks/useAmbientSound'

function BackgroundMusicToggle() {
  const { isPlaying, toggleSound, volume, updateVolume } = useAmbientSound()

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleSound()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateVolume(parseFloat(e.target.value))
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
      {/* Volume slider (appears on hover or when playing) */}
      <motion.div
        initial={false}
        animate={{
          width: isPlaying ? 80 : 0,
          opacity: isPlaying ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <input
          type="range"
          min="0"
          max="0.5"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-walnut-200/50 outline-none"
          style={{
            background: `linear-gradient(to right, #6da02f 0%, #6da02f ${(volume / 0.5) * 100}%, rgba(168,162,158,0.3) ${(volume / 0.5) * 100}%, rgba(168,162,158,0.3) 100%)`,
          }}
          aria-label="Background music volume"
        />
      </motion.div>

      {/* Toggle button */}
      <motion.button
        type="button"
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-walnut-200/60 bg-cream-50/80 text-walnut-800 shadow-lg shadow-walnut-900/10 backdrop-blur-xl transition-colors hover:bg-forest-600 hover:text-cream-50"
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </motion.button>
    </div>
  )
}

export default BackgroundMusicToggle