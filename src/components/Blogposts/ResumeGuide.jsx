import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import GiveResume from "../Access/give_resume.png"
import './Blogposts.css'

const ResumeGuide = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const copyLinkToClipboard = () => {
    const linkToCopy = "https://jaidensiu.vercel.app/blogs/resume-guide";
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
        <h2>How to Write a Great Resume</h2>
        <p>Under construction...</p>
        <button type="button" className="link" onClick={copyLinkToClipboard}>
          Copy link
        </button>
        <Snackbar className='copyLinkSnackBar' open={openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <MuiAlert severity="success" variant="filled">
            Link copied to clipboard.
          </MuiAlert>
        </Snackbar>
      </div>

      <div className="blogpost__image__container">
        <img className='blogpost__image' src={GiveResume} alt='give_resume' />
      </div>

      <h3 className='blogpost__section__title'>Under construction...</h3>
    </section>
  )
}

export default ResumeGuide