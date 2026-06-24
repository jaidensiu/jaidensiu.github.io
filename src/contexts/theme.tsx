import { createContext, useEffect, useState, type ReactNode } from 'react'

type ThemeName = 'dark' | 'light'

export interface ThemeContextValue {
  themeName: ThemeName
  toggleTheme: () => void
}

const ThemeContext = createContext<[ThemeContextValue]>([
  { themeName: 'dark', toggleTheme: () => {} },
])

const getInitialThemeName = (): ThemeName => {
  const stored = localStorage.getItem('themeName')
  if (stored === 'dark' || stored === 'light') {
    return stored
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>(getInitialThemeName)

  useEffect(() => {
    localStorage.setItem('themeName', themeName)
  }, [themeName])

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeName(e.matches ? 'dark' : 'light')
    }
    darkMediaQuery.addEventListener('change', handleChange)
    return () => darkMediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
