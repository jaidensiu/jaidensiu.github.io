import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import './Blogposts.css'

const Coop = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const copyLinkToClipboard = () => {
    const linkToCopy = "https://jaidensiu.vercel.app/blogs/co-op";
    // Navigator clipboard API
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setOpenSnackbar(true)
      setTimeout(() => {
        setOpenSnackbar(false)
      }, 3000)
    }).catch((error) => {
      console.error('Unable to copy:', error)
    })
  }

  function handleClick(event, sectionId) {
    event.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id='bmeg-electives-guide' className='blogpost section'>
      <div className='blogpost__header'>
        <h2>My UBC Co-op Program Experience</h2>
        <p className="blogpost__date">December 21, 2025</p>
        <p className="blogpost__subtitle">My co-op experience wrapped</p>
        <button type="button" className="link" onClick={copyLinkToClipboard}>
          Copy link
        </button>
        <Snackbar className='copyLinkSnackBar' open={openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <MuiAlert severity="success" variant="filled">
            Link copied to clipboard.
          </MuiAlert>
        </Snackbar>
      </div>

      <h3 className='blogpost__section__title'>Table of contents</h3>
      <div className='blogpost__section__body'>
        <ul className='bulleted_list'>
          <li>
            <a href='#what-is-co-op' className='link' onClick={(event) => handleClick(event, 'what-is-co-op')}>
              What is a co-op program?
            </a>
          </li>
          <li>
            <a href='#my-experience' className='link' onClick={(event) => handleClick(event, 'my-experience')}>
              My co-op experience
            </a>
          </li>
          <li>
            <a href='#advice' className='link' onClick={(event) => handleClick(event, 'advice')}>
              Advice for my (slightly) younger self
            </a>
          </li>
        </ul>
      </div>

      <section id='what-is-co-op'>
        <h3 className='blogpost__section__title'>What is co-op?</h3>
        <div className='blogpost__section__body'>
          <p>
            in construction...
          </p>
        </div>
      </section>

      <section id='my-experience'>
        <h3 className='blogpost__section__title'>My co-op experience</h3>
        <div className='blogpost__section__body'>
          <p>
            in construction...
          </p>
        </div>
      </section>

      <section id='advice'>
        <h3 className='blogpost__section__title'>Advice for my (slightly) younger self</h3>
        <div className='blogpost__section__body'>
          <p>
            in construction...
          </p>
        </div>
      </section>
    </section>
  )
}

export default Coop