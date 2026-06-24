import { useState, type MouseEvent, type ReactNode } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import './Blogposts.css'

export interface BlogPostMeta {
  title: string
  date: string
  subtitle?: string
}

const BlogPost = ({ meta, children }: { meta: BlogPostMeta; children: ReactNode }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false)

  // Smooth-scroll in-page TOC links without writing the #hash to the URL.
  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLElement).closest('a')
    const href = anchor?.getAttribute('href')
    if (!href?.startsWith('#')) return
    const target = document.getElementById(href.slice(1))
    if (target) {
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setOpenSnackbar(true)
      setTimeout(() => {
        setOpenSnackbar(false)
      }, 3000)
    }).catch((error) => {
      console.error('Unable to copy:', error)
    })
  }

  return (
    <section className='blogpost section'>
      <div className='blogpost__header'>
        <h2>{meta.title}</h2>
        <p className='blogpost__date'>{meta.date}</p>
        {meta.subtitle && <p className='blogpost__subtitle'>{meta.subtitle}</p>}
        <button type='button' className='link' onClick={copyLinkToClipboard}>
          Copy link
        </button>
        <Snackbar className='copyLinkSnackBar' open={openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <MuiAlert severity='success' variant='filled'>
            Link copied to clipboard.
          </MuiAlert>
        </Snackbar>
      </div>
      <div className='blogpost__content' onClick={handleContentClick}>
        {children}
      </div>
    </section>
  )
}

export default BlogPost
