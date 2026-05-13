interface SectionHeadingProps {
  eyebrow: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  className?: string
}

function SectionHeading({ align = 'left', className = '', copy, eyebrow, title }: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <div className={`${isCentered ? 'text-center' : ''} ${className}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className={`section-title ${isCentered ? 'mx-auto' : ''}`}>{title}</h2>
      {copy ? <p className={`section-copy ${isCentered ? 'mx-auto' : ''}`}>{copy}</p> : null}
    </div>
  )
}

export default SectionHeading
