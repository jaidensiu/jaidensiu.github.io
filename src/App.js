import { inject } from '@vercel/analytics'
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import BmegElectivesGuide from './components/Blogposts/BmegElectivesGuide'
import TourOfGoPart1 from './components/Blogposts/TourOfGoPart1'
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
            <div className={`${themeName} app`}>
                <div className='page'>
                    <Header />
                    <Routes>
                        <Route path="/" element={<main><About /></main>} />
                        <Route path="/experience" element={<main><Experience /></main>} />
                        <Route path="/projects" element={<main><Projects /></main>} />
                        <Route path="/blogs" element={<main><Blogs /></main>} />
                        <Route path="/blogs/bmeg-electives-guide" element={<main><BmegElectivesGuide /></main>} />
                        <Route path="/blogs/tour-of-go-part-1" element={<main><TourOfGoPart1 /></main>} />
                    </Routes>
                    <ScrollToTop />
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
