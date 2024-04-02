import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import bme from "../Access/bme.jpeg"
import './BlogPosts.css'

const BmegElectivesGuide = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const copyLinkToClipboard = () => {
        const linkToCopy = "jaidensiu.vercel.app/blogs/bmeg-electives-guide";
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
        <section id='bmeg-electives-guide' className='blogpost section'>
            <div className='blogpost__header'>
                <h2>UBC BMEG Technical Electives Guide</h2>
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

            <div className="blogpost__image__container">
                <img className='blogpost__image' src={bme} alt='BME' />
            </div>

            <h3 className='blogpost__section__title'>Table of contents</h3>
            <div className='blogpost__section__body'>
                <ul className='bulleted_list'>
                    <li>
                        <a href='/blogs/bmeg-electives-guide/#prologue' className='link'>
                            Prologue
                        </a>
                    </li>
                    <li>
                        <a href='/blogs/bmeg-electives-guide/#streams-and-specs' className='link'>
                            Current state of streams and specializations
                        </a>
                    </li>
                    <li>
                        <a href='/blogs/bmeg-electives-guide/#too-many-electives' className='link'>
                            Too many electives and decision paralysis
                        </a>
                    </li>
                    <li>
                        <a href='/blogs/bmeg-electives-guide/#recommended-electives' className='link'>
                            Recommended technical electives
                        </a>
                    </li>
                    <ul>
                        <li>
                            <a href='/blogs/bmeg-electives-guide/#informatics' className='link'>
                                Biomedical Informatics
                            </a>
                        </li>
                        <li>
                            <a href='/blogs/bmeg-electives-guide/#biomechanics' className='link'>
                                Biomechanics and Biomaterials
                            </a>
                        </li>
                        <li>
                            <a href='/blogs/bmeg-electives-guide/#systems' className='link'>
                                Biomedical Systems and Signals
                            </a>
                        </li>
                        <li>
                            <a href='/blogs/bmeg-electives-guide/#cellular' className='link'>
                                Cellular Bioengineering
                            </a>
                        </li>
                    </ul>
                    <li>
                        <a href='/blogs/bmeg-electives-guide/#parting-words' className='link'>
                            Parting words
                        </a>
                    </li>
                </ul>
            </div>

            <section id='prologue'>
                <h3 className='blogpost__section__title'>Prologue</h3>
                <div className='blogpost__section__body'>
                    <p>
                        UBC&apos;s Biomedical Engineering program (BMEG) offers a plethora of technical electives for students from many different departments. I was someone who had too many interests and worried about fitting all the courses that interested me in my course schedule each year. As someone who is near the end of BMEG and currently in the streams curriculum (more on that in a bit), I hope to help you decide what electives you might want to take.
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
                        Don&apos;t bite more than you can chew when it comes to planning your courses each term, make sure you leave room in your schedule so you have time to do other things in your life. Narrow down the courses you want to take, practice making decisions quickly, and plan out the courses you want to take. Engineering is challenging, so make sure you are able to strike a balance between quality and quantity that works for you in regards to learning.
                    </p>
                </div>
            </section>

            <section id='recommended-electives'>
                <h3 className='blogpost__section__title'>Recommended technical electives</h3>
                <div className='blogpost__section__body'>
                    <p>
                        Based on the combined experience and knowledge of other BMEG students and myself, these are the following technical electives that we would recommend for each stream/specialization.
                        <br />
                        <br />
                        If you are interested in taking CPSC electives, I would highly advise you to take CPEN 221 instead of CPEN 223 in 2nd year so you can take CPSC 221 since its pre-reqs are CPEN 221 with either MATH 220 or CPSC 121. Nearly all of the upper level CPSC courses in the technical electives list need CPSC 221 as a pre-req.
                    </p>
                    <section id='informatics'>
                        <h4 className='blogpost__section__title'>Biomedical Informatics</h4>
                        <p>
                            This area is focused on computer science subjects related to algorithms, machine learning, and big data.
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
                                    <td>MATH 220 or CPSC 121</td>
                                    <td>Mathematical Proof or Models of Computation</td>
                                    <td>3 or 4</td>
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
                                    <td>BMEG 424</td>
                                    <td>Genome Informatics</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='biomechanics'>
                        <h4 className='blogpost__section__title'>Biomechanics and Biomaterials</h4>
                        <p>
                            This area is focused on mechanical and materials engineering subjects related to mechanics, materials, and medical devices.
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
                                    <td>APSC 278 + 279</td>
                                    <td>Engineering Materials + Laboratory</td>
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
                                    <td>MECH 360</td>
                                    <td>Mechanics of Materials</td>
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
                            This area is focused on electrical engineering subjects related to signals, medical imaging, and robotics.
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
                                    <td>BMEG 425 / MECH 464</td>
                                    <td>Biomedical Robotics / Industrial Robotics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>ELEC 421 / 422</td>
                                    <td>Digital Signal and Image Processing / Biosignals and Systems</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='cellular'>
                        <h4 className='blogpost__section__title'>Cellular Bioengineering</h4>
                        <p>
                            This area is focused on bioengineering subjects related to cells, bioprocesses, and biotechnology.
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
                                    <td>MICB 202 / 212</td>
                                    <td>Introductory Medical Microbiology and Immunology / Introductory Immunology and Virology</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>BMEG 373</td>
                                    <td>Microfluidics</td>
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
                                    <td>BMEG 470</td>
                                    <td>Cellular Responses to Forces and Biomaterials</td>
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
                        At the end of the day, the technical electives let you explore what you like and don&apos;t like. Don&apos;t be afraid of reaching out to professors and upper year students to ask about courses and their advice. I would check out the <a className='link' target='_blank' rel='noopener noreferrer' href='https://www.reddit.com/r/BMEG/'>BMEG Reddit</a> as past students leave course reviews, and this <a className='link' target='_blank' rel='noopener noreferrer' href='https://docs.google.com/spreadsheets/d/1mx7LyDsvWd91xz02KM4TONPdYCS35O-0akQ7jdQ6Xwk/edit?usp=sharing'>BMEG Degree Planner</a> spreadsheet I made to plan my courses.
                    </p>
                </div>
            </section>
        </section>
    )
}

export default BmegElectivesGuide
