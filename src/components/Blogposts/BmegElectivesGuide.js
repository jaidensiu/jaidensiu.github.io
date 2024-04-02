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
                            This area is focused on computer science subjects such as algorithms, machine learning, and big data.
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
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=121"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CPSC 121
                                        </a> 
                                        &nbsp;or&nbsp;
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MATH&course=220"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MATH 220
                                        </a> 
                                    </td>
                                    <td>Models of Computation or Mathematical Proof</td>
                                    <td>4 or 3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=221"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CPSC 221
                                        </a> 
                                    </td>
                                    <td>Basic Algorithms and Data Structures</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=304"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CPSC 304
                                        </a> 
                                    </td>
                                    <td>Introduction to Relational Databases</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=320"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CPSC 320
                                        </a> 
                                    </td>
                                    <td>Intermediate Algorithm Design and Analysis</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=330"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CPSC 330
                                        </a> 
                                    </td>
                                    <td>Applied Machine Learning</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=340"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CPSC 340
                                        </a> 
                                    </td>
                                    <td>Machine Learning and Data Mining</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=424"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 424
                                        </a> 
                                    </td>
                                    <td>Genome Informatics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=425"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CPSC 425
                                        </a> 
                                    </td>
                                    <td>Computer Vision</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='biomechanics'>
                        <h4 className='blogpost__section__title'>Biomechanics and Biomaterials</h4>
                        <p>
                            This area is focused on mechanical and materials engineering subjects such as mechanics, materials, and medical devices.
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
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=APSC&course=278"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            APSC 278
                                        </a>
                                        &nbsp;and&nbsp;
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=APSC&course=279"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            APSC 279
                                        </a>
                                    </td>
                                    <td>Engineering Materials and Engineering Materials Laboratory</td>
                                    <td>3 and 1</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MECH&course=260"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MECH 260
                                        </a>
                                    </td>
                                    <td>Introduction to Mechanics of Materials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=330"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 330
                                        </a>
                                    </td>
                                    <td>Biomechanics II</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MECH&course=360"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MECH 360
                                        </a>
                                    </td>
                                    <td>Mechanics of Materials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=495"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 495
                                        </a>
                                    </td>
                                    <td>Biomaterials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MECH&course=433"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MECH 433
                                        </a>
                                    </td>
                                    <td>Biofluids</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MECH&course=436"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MECH 436
                                        </a>
                                    </td>
                                    <td>Fundamentals of Injury Biomechanics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MECH&course=462"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MECH 462
                                        </a>
                                    </td>
                                    <td>Finite Element Analysis</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='systems'>
                        <h4 className='blogpost__section__title'>Biomedical Systems and Signals</h4>
                        <p>
                            This area is focused on electrical engineering subjects such as signals, medical imaging, and robotics.
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
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=ELEC&course=221"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            ELEC 221
                                        </a>
                                    </td>
                                    <td>Signals and Systems</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=320"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 320
                                        </a>
                                    </td>
                                    <td>Bioengineering Feedback Systems and Controls</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=420"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 420
                                        </a>
                                    </td>
                                    <td>Medical Imaging</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=421"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 421
                                        </a>
                                    </td>
                                    <td>Linear Systems in Optics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=422"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 422
                                        </a>
                                    </td>
                                    <td>Modern Biomedical Optical Imaging</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=ELEC&course=421"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            ELEC 421
                                        </a>
                                        &nbsp;or&nbsp;
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=ELEC&course=422"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            ELEC 422
                                        </a>
                                    </td>
                                    <td>Digital Signal and Image Processing or Biosignals and Systems</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=ELEC&course=462"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            ELEC 462
                                        </a>
                                    </td>
                                    <td>Sensors and Actuators in Microsystems</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MECH&course=464"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MECH 464
                                        </a>
                                    </td>
                                    <td>Industrial Robotics</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='cellular'>
                        <h4 className='blogpost__section__title'>Cellular Bioengineering</h4>
                        <p>
                            This area is focused on bioengineering subjects such as molecular biology, bioprocessing, and biotechnology.
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
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MICB&course=202"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MICB 202
                                        </a>
                                        &nbsp;or&nbsp;
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MICB&course=212"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            MICB 212
                                        </a>
                                    </td>
                                    <td>Introductory Medical Microbiology and Immunology or Introductory Immunology and Virology</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BIOC&course=302"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BIOC 302
                                        </a>
                                    </td>
                                    <td>General Biochemistry</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=373"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 373
                                        </a>
                                    </td>
                                    <td>Microfluidics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=374"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 374
                                        </a>
                                    </td>
                                    <td>Cellular Bioengineering: Laboratory and Design</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CHBE&course=381"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CHBE 381
                                        </a>
                                    </td>
                                    <td>Biological Engineering and Bio-Manufacturing I</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=470"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            BMEG 470
                                        </a>
                                    </td>
                                    <td>Cellular Responses to Forces and Biomaterials</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CAPS&course=421"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CAPS 421
                                        </a>
                                    </td>
                                    <td>Cell Biology and Human Disease</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CHBE&course=481"
                                            className='link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            CHBE 481
                                        </a>
                                    </td>
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
