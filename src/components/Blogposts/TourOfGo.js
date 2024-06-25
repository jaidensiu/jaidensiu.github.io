import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import go from "../Access/go.gif"
import './Blogposts.css'

const GoCrashCourse = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const copyLinkToClipboard = () => {
        const linkToCopy = "https://jaidensiu.vercel.app/blogs/go-crash-course";
        // Navigator clipboard API
        navigator.clipboard.writeText(linkToCopy)
            .then(() => {
                setOpenSnackbar(true)
                setTimeout(() => {
                    setOpenSnackbar(false)
                }, 3000)
            })
            .catch((error) => {
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
                <h2>A Tour of the Go Programming Language</h2>
                <p>June 24, 2024</p>
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
                <img className='blogpost__image' src={go} alt='BME' />
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
                        <a href='#basics' className='link' onClick={(event) => handleClick(event, 'basics')}>
                            Basics
                        </a>
                    </li>
                    <li>
                        <a href='#flow-control' className='link' onClick={(event) => handleClick(event, 'flow-control')}>
                            Flow Control
                        </a>
                    </li>
                    <li>
                        <a href='#data-structures' className='link' onClick={(event) => handleClick(event, 'data-structures')}>
                            Data Structures
                        </a>
                    </li>
                    <li>
                        <a href='#functions' className='link' onClick={(event) => handleClick(event, 'functions')}>
                            Functions
                        </a>
                    </li>
                    <li>
                        <a href='#pointers' className='link' onClick={(event) => handleClick(event, 'pointers')}>
                            Pointers
                        </a>
                    </li>
                    <li>
                        <a href='#interfaces' className='link' onClick={(event) => handleClick(event, 'interfaces')}>
                            Interfaces
                        </a>
                    </li>
                    <li>
                        <a href='#error-handling' className='link' onClick={(event) => handleClick(event, 'error-handling')}>
                            Error Handling
                        </a>
                    </li>
                    <li>
                        <a href='#goroutines' className='link' onClick={(event) => handleClick(event, 'goroutines')}>
                            Goroutines
                        </a>
                    </li>
                </ul>
            </div>

            <section id='prologue'>
                <h3 className='blogpost__section__title'>Prologue</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='basics'>
            <h3 className='blogpost__section__title'>Basics</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='flow-control'>
                <h3 className='blogpost__section__title'>Flow Control</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='data-structures'>
                <h3 className='blogpost__section__title'>Data Structures</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='functions'>
                <h3 className='blogpost__section__title'>Functions</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='pointers'>
                <h3 className='blogpost__section__title'>Pointers</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='interfaces'>
                <h3 className='blogpost__section__title'>Interfaces</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='error-handling'>
                <h3 className='blogpost__section__title'>Error Handling</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='goroutines'>
                <h3 className='blogpost__section__title'>Goroutines</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>
        </section>
    )
}

export default GoCrashCourse
