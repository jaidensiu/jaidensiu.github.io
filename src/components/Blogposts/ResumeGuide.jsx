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

      <h3 className='blogpost__section__title'>Table of contents</h3>
      <div className='blogpost__section__body'>
        <ul className='bulleted_list'>
          <li>
            <a href='#prologue' className='link' onClick={(event) => handleClick(event, 'prologue')}>
              Prologue
            </a>
          </li>
          <li>
            <a href='#resume-basics' className='link' onClick={(event) => handleClick(event, 'resume-basics')}>
              The Basics of a Strong Resume
            </a>
          </li>
          <ul>
            <li>
              <a href='#standing-out' className='link' onClick={(event) => handleClick(event, 'standing-out')}>
                The Goal: Standing Out
              </a>
            </li>
            <li>
              <a href='#formatting-guidelines' className='link' onClick={(event) => handleClick(event, 'formatting-guidelines')}>
                Key Formatting Guidelines
              </a>
            </li>
            <li>
              <a href='#resume-sections' className='link' onClick={(event) => handleClick(event, 'resume-sections')}>
                Essential Resume Sections
              </a>
            </li>
          </ul>
          <li>
            <a href='#parting-words' className='link' onClick={(event) => handleClick(event, 'parting-words')}>
              Tips for Crafting a Great Resume
            </a>
          </li>
          <ul>
            <li>
              <a href='#tailoring-resume' className='link' onClick={(event) => handleClick(event, 'tailoring-resume')}>
                Tailoring Your Resume to the Job Role
              </a>
            </li>
            <li>
              <a href='#showcasing-impact' className='link' onClick={(event) => handleClick(event, 'howcasing-impact')}>
                Showcasing Your Impact and Results
              </a>
            </li>
            <li>
              <a href='#quantifying-achievements' className='link' onClick={(event) => handleClick(event, 'quantifying-achievements')}>
                Quantifying Achievements
              </a>
            </li>
            <li>
              <a href='#make-resume-speak' className='link' onClick={(event) => handleClick(event, 'make-resume-speak')}>
                Making Your Resume Speak to Different Audiences
              </a>
            </li>
          </ul>
          <li>
            <a href='#parting-words' className='link' onClick={(event) => handleClick(event, 'parting-words')}>
              An Aside: Gaining Experience When You Have None
            </a>
          </li>
          <li>
            <a href='#parting-words' className='link' onClick={(event) => handleClick(event, 'parting-words')}>
              Parting words
            </a>
          </li>
        </ul>
      </div>

      <h3 className='blogpost__section__title'>Under construction...</h3>
    </section>
  )
}

export default ResumeGuide