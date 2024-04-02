import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import './BlogPosts.css'

const BmegElectivesGuide = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const copyLinkToClipboard = () => {
        const linkToCopy = "jaidensiu.vercel.app/blogs/bmeg-guide";
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

    return (
        <section id='bmeg-guide' className='blogpost section'>
            <div className='blogpost__header'>
                <h2>Guide to UBC BMEG</h2>
                <p>April 2, 2024</p>
                <button type="button" className="link" onClick={copyLinkToClipboard}>
                    Copy link
                </button>
                <Snackbar open={openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <MuiAlert severity="success" sx={{ width: '100%' }}>
                        Link copied to clipboard.
                    </MuiAlert>
                </Snackbar>
            </div>

            <h3 className='blogpost__section__title'>In progress...</h3>
        </section>
    )
}

export default BmegElectivesGuide
