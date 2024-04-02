import { inject } from '@vercel/analytics'
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import BmegElectivesGuide from './components/BlogPosts/BmegElectivesGuide'
import BmegGuide from './components/BlogPosts/BmegGuide'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
    const [{ themeName }] = useContext(ThemeContext)
    inject()

    return (
        <Router>
            <div id='top' className={`${themeName} app`}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<main><Blogs /></main>} />
                    <Route path="/blogs/bmeg-electives-guide" element={<main><BmegElectivesGuide /></main>} />
                    <Route path="/blogs/bmeg-guide" element={<main><BmegGuide /></main>} />
                </Routes>
                <ScrollToTop />
                <Footer />
            </div>
        </Router>
    )
}

const Home = () => (
    <main>
        <About />
        <Experience />
        <Projects />
    </main>
)

export default App
