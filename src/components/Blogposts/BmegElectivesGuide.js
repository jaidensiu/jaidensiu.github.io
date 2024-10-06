import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import BmeImage from "../Access/bme.jpeg"
import './Blogposts.css'

const BmegElectivesGuide = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const copyLinkToClipboard = () => {
        const linkToCopy = "https://jaidensiu.vercel.app/blogs/bmeg-electives-guide";
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
                <h2>UBC BMEG Technical Electives Guide</h2>
                <p>April 2, 2024</p>
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
                <img className='blogpost__image' src={BmeImage} alt='BME' />
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
                        <a href='#streams-and-specs' className='link' onClick={(event) => handleClick(event, 'streams-and-specs')}>
                            Current state of streams and specializations
                        </a>
                    </li>
                    <li>
                    <a href='#too-many-electives' className='link' onClick={(event) => handleClick(event, 'too-many-electives')}>
                            Too many electives and decision paralysis
                        </a>
                    </li>
                    <li>
                        <a href='#recommended-electives' className='link' onClick={(event) => handleClick(event, 'recommended-electives')}>
                            Recommended technical electives
                        </a>
                    </li>
                    <ul>
                        <li>
                            <a href='#informatics' className='link' onClick={(event) => handleClick(event, 'informatics')}>
                                Biomedical Informatics
                            </a>
                        </li>
                        <li>
                            <a href='#biomechanics' className='link' onClick={(event) => handleClick(event, 'biomechanics')}>
                                Biomechanics and Biomaterials
                            </a>
                        </li>
                        <li>
                            <a href='#systems' className='link' onClick={(event) => handleClick(event, 'systems')}>
                                Biomedical Systems and Signals
                            </a>
                        </li>
                        <li>
                            <a href='#cellular' className='link' onClick={(event) => handleClick(event, 'cellular')}>
                                Cellular Bioengineering
                            </a>
                        </li>
                    </ul>
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
                        The biomedical engineering program at UBC offers a plethora of technical electives. I was someone who had too many interests and worried about fitting all the courses that interested me in my course schedule each year. As someone who is near the end of BMEG and in the streams curriculum (more on that in a bit), I hope to help you decide what electives you might want to take.
                    </p>
                </div>
            </section>

            <section id='streams-and-specs'>
                <h3 className='blogpost__section__title'>Current state of streams and specializations</h3>
                <div className='blogpost__section__body'>
                    <p>
                        BMEG used to have 4 streams that students applied to and got placed into at the end of 2nd year, applicable to students who entered UBC in 2020W and prior. Those 4 streams being Biomedical Informatics, Biomechanics and Biomaterials, Biomedical Systems and Signals, and Cellular Bioengineering. Students in each stream had to take a set of core stream courses along with chosen stream electives from a list of courses. Further details about the streams can be found <a className='link' target='_blank' rel='noopener noreferrer' href='https://bme.ubc.ca/education/current-undergraduate-students/curriculum-for-students-who-entered-ubc-in-2020w-and-prior/'>here</a>.
                        <br />
                        <br />
                        BMEG now has specializations in which you choose your technical electives to satisfy a set of requirements for those who entered UBC in 2021W and after. The only difference now is that you can mix electives from different streams as long as you meet the requirements. Further details about the specializations can be found <a className='link' target='_blank' rel='noopener noreferrer' href='https://bme.ubc.ca/education/undergraduate-program-entry/2021w-after/'>here</a>.
                    </p>
                </div>    
            </section>

            <section id='too-many-electives'>
                <h3 className='blogpost__section__title'>Too many electives and decision paralysis</h3>
                <div className='blogpost__section__body'>
                    <p>
                        If you are in the streams curriculum, choosing your technical electives isn&apos;t too hard to figure out as your selection of electives are bounded based on your stream. For me, I was interested in CPSC and ELEC courses so I decided to pursue the Informatics stream and took some courses from the Systems and Signals stream. You can see more of how I planned my courses in my degree planner spreadsheet which I&apos;ve linked in the last section of this blog.
                        <br />
                        <br />
                        If you are in the specializations curriculum, choosing your technical electives might be a bit harder to figure out since you are faced with a huge list of electives, and you might not know if you satisfy the requirements right away. I would recommend to look at the streams to help guide what set of courses you might want to take before you try to plan your courses to meet the requirements. The following section will also provide you with a similar set of courses for each stream/specialization.
                        <br />
                        <br />
                        In the case you find yourself wanting to take more electives than the required amount, it is possible to take extra courses even outside the list of technical electives to explore your interests. I would reach out to SBME Student Services if they can count certain electives outside of the list as part of your degree since some courses might be eligible for approval to count towards your technical electives requirements.
                        <br />
                        <br />
                        Don&apos;t bite more than you can chew when it comes to planning your courses each term, make sure you leave room in your schedule so you have time to do other things in your life. Narrow down and plan out the courses you want to take so that you can schedule your courses accordingly. Engineering is challenging, so make sure you are able to strike a balance between quality and quantity that works for you in regards to learning.
                    </p>
                </div>
            </section>

            <section id='recommended-electives'>
                <h3 className='blogpost__section__title'>Recommended technical electives</h3>
                <div className='blogpost__section__body'>
                    <p>
                        With the combined experience and knowledge of other BMEG students and myself, the technical electives tables in the following section are what I would recommend for each stream/specialization. Note that these are just technical electives I recommend for each stream/specialization. You can find a full list of the technical electives on the SBME website or on the SBME Undergraduate Advising Canvas course.
                        <br />
                        <br />
                        If you are interested in taking CPSC electives, I would highly advise you to take CPEN 221 instead of CPEN 223 in 2nd year so you can take CPSC 221 since its pre-reqs are CPEN 221 with either MATH 220 or CPSC 121. Nearly all of the upper level CPSC courses in the technical electives list need CPSC 221 as a pre-req.
                    </p>
                    <section id='informatics'>
                        <h4 className='blogpost__section__title'>Biomedical Informatics</h4>
                        <p>
                            This area is focused on computer science related subjects such as algorithms, machine learning, and human-computer interaction.
                        </p>
                        <table className="blogpost__table">
                            <thead className="blogpost__table__header">
                                <tr>
                                    <th>Course</th>
                                    <th>Title</th>
                                    <th>Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CPSC 121 / MATH 220</td>
                                    <td>Models of Computation / Mathematical Proof</td>
                                    <td>4 / 3</td>
                                </tr>
                                <tr>
                                    <td>CPSC 221</td>
                                    <td>Basic Algorithms and Data Structures</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>CPSC 304</td>
                                    <td>Introduction to Relational Databases</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CPSC 320</td>
                                    <td>Intermediate Algorithm Design and Analysis</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CPSC 330</td>
                                    <td>Applied Machine Learning</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CPSC 340</td>
                                    <td>Machine Learning and Data Mining</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 423</td>
                                    <td>Clinical Informatics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 424</td>
                                    <td>Genome Informatics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CPEN 441</td>
                                    <td>Human Computer Interfaces in Engineering Design</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>CPSC 425</td>
                                    <td>Computer Vision</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='biomechanics'>
                        <h4 className='blogpost__section__title'>Biomechanics and Biomaterials</h4>
                        <p>
                            This area is focused on mechanical and materials engineering related subjects such as drug delivery systems, continuum mechanics, and medical devices.
                        </p>
                        <table className="blogpost__table">
                            <thead className="blogpost__table__header">
                                <tr>
                                    <th>Course</th>
                                    <th>Title</th>
                                    <th>Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>APSC 278 + APSC 279</td>
                                    <td>Engineering Materials + Engineering Materials Laboratory</td>
                                    <td>3 + 1</td>
                                </tr>
                                <tr>
                                    <td>MECH 260</td>
                                    <td>Introduction to Mechanics of Materials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 330</td>
                                    <td>Biomechanics II</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 372</td>
                                    <td>Biomedical Materials and Drug Delivery</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 373</td>
                                    <td>Microfluidics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>MECH 360</td>
                                    <td>Mechanics of Materials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 400L</td>
                                    <td>Experimental Microfluidics for Bioanalytical Applications</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 495</td>
                                    <td>Biomaterials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>MECH 433</td>
                                    <td>Biofluids</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>MECH 436</td>
                                    <td>Fundamentals of Injury Biomechanics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>MECH 462</td>
                                    <td>Finite Element Analysis</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='systems'>
                        <h4 className='blogpost__section__title'>Biomedical Systems and Signals</h4>
                        <p>
                            This area is focused on electrical engineering related subjects such as signal processing, medical imaging, and robotics.
                        </p>
                        <table className="blogpost__table">
                            <thead className="blogpost__table__header">
                                <tr>
                                    <th>Course</th>
                                    <th>Title</th>
                                    <th>Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ELEC 221</td>
                                    <td>Signals and Systems</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>BMEG 320</td>
                                    <td>Bioengineering Feedback Systems and Controls</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 420</td>
                                    <td>Medical Imaging</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 421</td>
                                    <td>Linear Systems in Optics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 422</td>
                                    <td>Modern Biomedical Optical Imaging</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 425</td>
                                    <td>Biomedical Robotics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>ELEC 421 / ELEC 422</td>
                                    <td>Digital Signal and Image Processing / Biosignals and Systems</td>
                                    <td>3 / 3</td>
                                </tr>
                                <tr>
                                    <td>ELEC 462</td>
                                    <td>Sensors and Actuators in Microsystems</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>MECH 464</td>
                                    <td>Industrial Robotics</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='cellular'>
                        <h4 className='blogpost__section__title'>Cellular Bioengineering</h4>
                        <p>
                            This area is focused on bioengineering related subjects such as molecular biology, bioprocessing, and biotechnology.
                        </p>
                        <table className="blogpost__table">
                            <thead className="blogpost__table__header">
                                <tr>
                                    <th>Course</th>
                                    <th>Title</th>
                                    <th>Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>MICB 202 / MICB 212</td>
                                    <td>Introductory Medical Microbiology and Immunology / Introductory Immunology and Virology</td>
                                    <td>3 / 3</td>
                                </tr>
                                <tr>
                                    <td>BIOC 302</td>
                                    <td>General Biochemistry</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 374</td>
                                    <td>Cellular Bioengineering: Laboratory and Design</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CHBE 381</td>
                                    <td>Biological Engineering and Bio-Manufacturing I</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 400J</td>
                                    <td>Immunoengineering</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 470</td>
                                    <td>Cellular Responses to Forces and Biomaterials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 474</td>
                                    <td>Stem Cells and Regenerative Medicine</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CAPS 421</td>
                                    <td>Cell Biology and Human Disease</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CHBE 481</td>
                                    <td>Biological Engineering and Bio-Manufacturing II</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </section>

            <section id='parting-words'>
                <h3 className='blogpost__section__title'>Parting words</h3>
                <div className='blogpost__section__body'>
                    <p>
                        At the end of the day, the technical electives let you explore what you like and don&apos;t like. Don&apos;t be afraid of reaching out to professors and upper year students to ask about courses and their advice. I would check out the <a className='link' target='_blank' rel='noopener noreferrer' href='https://www.reddit.com/r/BMEG/'>BMEG Reddit</a> as past students leave course reviews, and this <a className='link' target='_blank' rel='noopener noreferrer' href='https://docs.google.com/spreadsheets/d/1mx7LyDsvWd91xz02KM4TONPdYCS35O-0akQ7jdQ6Xwk/edit?usp=sharing'>BMEG Degree Planner</a> spreadsheet I made to plan my courses. Special thanks to my friends who reviewed this blog post and offered me suggestions.
                    </p>
                </div>
            </section>
        </section>
    )
}

export default BmegElectivesGuide
