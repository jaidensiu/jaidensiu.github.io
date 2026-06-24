import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 900 ? setIsVisible(true) : setIsVisible(false)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return isVisible ? (
    <div className='scroll-top' onClick={scrollToTop} onKeyDown={scrollToTop} role='button' tabIndex={0}>
      <ArrowUpwardIcon fontSize='large' />
    </div>
  ) : null
}

export default ScrollToTop
