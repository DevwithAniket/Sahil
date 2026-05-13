import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'nav'
}

const variants = {
  primary: 'bg-forest-600 text-cream-50 shadow-xl shadow-forest-900/25 hover:bg-forest-700',
  secondary: 'border border-cream-50/50 bg-cream-50/10 text-cream-50 backdrop-blur-xl hover:bg-cream-50 hover:text-walnut-800',
  nav: 'bg-walnut-700 text-cream-50 shadow-lg shadow-walnut-900/15 hover:bg-forest-700',
}

function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export default Button
