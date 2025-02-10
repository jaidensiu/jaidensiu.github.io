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
              The Basics of a Resume
            </a>
          </li>
          <li>
            <a href='#parting-words' className='link' onClick={(event) => handleClick(event, 'parting-words')}>
              Tips for Crafting a Great Resume
            </a>
          </li>
          <ul>
            <li>
              <a href='#standing-out' className='link' onClick={(event) => handleClick(event, 'standing-out')}>
                The Goal: Standing Out
              </a>
            </li>
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

      <section id='prologue'>
        <h3 className='blogpost__section__title'>Prologue</h3>
        <div className='blogpost__section__body'>
          <p>
            Your resume is more than a piece of paper (or PDF document) of your experience — it&apos;s a personal sales pitch. Whether you&apos;re a student looking for a co-op/internship or just entering the workforce, a great resume can be the key to unlocking career opportunities and differentiating yourself from others in the screening process. However, writing a resume that effectively highlights your skills and experiences is hard. This guide will walk you through the essentials of building a resume that stands out, provide practical tips, and help you align your resume with what recruiters, hiring managers, and team members are looking for.
          </p>
        </div>
      </section>

      <section id='resume-basics'>
        <h3 className='blogpost__section__title'>The Basics of a Resume</h3>
        <div className='blogpost__section__body'>
          <p>
            The content of your resume should:
            <br />
            <br />
            <div className='blogpost__section__body'>
              <ul className='bulleted_list'>
                <li><strong>Not have grammatical error</strong> - Typos and poor grammar can appear unprofessional, so proofread your resume multiple times and have someone else review it</li>
                <li><strong>Not exceed one page</strong> - As a student or someone with minimal experience, a one-page resume ensures reviewers can quickly assess your qualifications while you keep your content relevant to the job or industry</li>
                <li><strong>Not include images</strong> - Avoid images or extensive graphics as they don&apos;t provide useful information and take up space that could be better used for valuable details</li>
              </ul>
            </div>
            The structure of your resume should include the following:
            <br />
            <br />
            <div className='blogpost__section__body'>
              <ul className='bulleted_list'>
                <li><strong>Header</strong> - Name, email, LinkedIn, personal website, and GitHub (use embedded links where possible)</li>
                <li><strong>Education</strong> - Degree, university, and graduation date</li>
                <li><strong>Skills</strong> - Tools, knowledge, or technical skills relevant to your field</li>
                <li><strong>Experience</strong> - Co-ops/internships, student organizations, or freelance work relevant to your field</li>
                <li><strong>Projects</strong> - Personal, academic, or extracurricular projects that showcase your abilities</li>
              </ul>
            </div>
            Eye-tracking studies show that people scan documents in an F-shaped pattern (<a className='link' target='_blank' rel='noopener noreferrer' href='https://tracigardner.github.io/TechComm/document-design/page--f-shaped-reading-pattern.html'>you can read about it here</a>), primarily scanning across the top and down the left side. This means that the structure of your resume is crucial in determining what information gets noticed first. Since a person will read across the top and then down the left side, the content that gets the most attention are the first few words of each section and bullet point. To optimize for this, structure your resume so that key details (job titles, companies, impact-driven statements, and measurable results) appear in those areas. Also ensure that your bullet points start with a strong action verb that best describes your experiences and accomplishments (<a className='link' target='_blank' rel='noopener noreferrer' href='https://hls.harvard.edu/bernard-koteen-office-of-public-interest-advising/opia-job-search-toolkit/action-verbs/'>Harvard Law School has a great list of action verbs</a>).
          </p>
        </div>
      </section>

      <section>
        <h3 className='blogpost__section__title'>Under construction...</h3>
      </section>
    </section>
  )
}

export default ResumeGuide