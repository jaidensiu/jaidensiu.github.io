import { inject } from '@vercel/analytics';
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import BmegElectives from './components/Blogs/Blogposts/BmegElectives'
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
                    <Route path="/blogs">
                        <Route index element={<main><Blogs /></main>}/>
                        <Route path="bmegelectives" element={<main><BmegElectives /></main>} />
                    </Route>
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
