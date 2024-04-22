import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState(localStorage.getItem('themeName') || 'dark')

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const name = darkMediaQuery.matches ? 'dark' : 'light'
        localStorage.setItem('themeName', name)
        setThemeName(name)
        darkMediaQuery.addEventListener('change', (e) => {
            const theme = e.matches ? 'dark' : 'light'
            localStorage.setItem('themeName', theme)
            setThemeName(theme)
        });
    }, [])

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark'
        localStorage.setItem('themeName', name)
        setThemeName(name)
    }

    return (
        <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
