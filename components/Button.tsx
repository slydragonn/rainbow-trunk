import { ReactNode } from 'react'

type ButtonSize = {
  w: string
  h: string
}

interface ButtonProps {
  children: ReactNode
  size: ButtonSize
  theme: 'dark' | 'light'
  styles?: string
}

const Button = ({ children, size, theme, styles }: ButtonProps) => {
  const THEMES = {
    dark: {
      backgroundColor: '#181818',
      color: '#fff'
    },
    light: {
      backgroundColor: '#fff',
      color: '#181818'
    }
  }

  return (
    <button
      style={{
        backgroundColor: THEMES[theme].backgroundColor,
        color: THEMES[theme].color,
        width: size.w,
        height: size.h
      }}
      className={`flex justify-center items-center p-4 rounded border border-dark shadow-sm hover:-translate-y-1 transition-all duration-300 ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button
