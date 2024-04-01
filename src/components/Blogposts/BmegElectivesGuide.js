import bme from "../Access/bme.jpeg"
import './Blogposts.css'

const BmegElectivesGuide = () => (
    <section id='bmegelectives' className='blogpost section'>
        <div className='blogpost__header'>
            <h2>UBC BMEG Technical Electives Guide</h2>
            <p>April 1, 2024</p>
        </div>

        <div className="blogpost__image__container">
            <img className='blogpost__image' src={bme} alt='BME' />
        </div>

        <h3 className='blogpost__section__title'>Prologue</h3>
        <div className='blogpost__section__body'>
            <p>
                UBC&apos;s Biomedical Engineering (BMEG) program offers a plethora of technical electives for students. I was someone who had too many interests and worried about fitting all the courses that interested me in my course schedule each year. As someone who is near the end of BMEG and currently in the streams curriculum (more on that in a bit), I hope to help you decide what electives you might want to take.
            </p>
        </div>

        <h3 className='blogpost__section__title'>Current state of streams and specializations</h3>
        <div className='blogpost__section__body'>
            <p>
                BMEG used to have 4 streams that students applied to and got placed into at the end of 2nd year, applicable to students who entered UBC in 2020W and prior. Those 4 streams being Biomedical Informatics, Biomechanics and Biomaterials, Biomedical Systems and Signals, and Cellular Bioengineering. Students in each stream had to take a set of core stream courses along with chosen stream electives from a list of courses. Further details about the streams can be found <a className='link' target='_blank' rel='noopener noreferrer' href='https://bme.ubc.ca/education/current-undergraduate-students/curriculum-for-students-who-entered-ubc-in-2020w-and-prior/'>here</a>.
                <br />
                <br />
                BMEG now has specializations in which you choose your technical electives to satisfy a set of requirements for those who entered UBC in 2021W and after. The only difference now is that you can mix electives from different streams as long as you meet the requirements. Further details about the specializations can be found <a className='link' target='_blank' rel='noopener noreferrer' href='https://bme.ubc.ca/education/undergraduate-program-entry/2021w-after/'>here</a>.
            </p>
        </div>

        <h3 className='blogpost__section__title'>Too many electives and decision paralysis</h3>
        <div className='blogpost__section__body'>
            <p>
                If you are in the streams curriculum, choosing your technical electives isn&apos;t too hard to figure out as your selection of electives are bounded based on your stream. For me, I was interested in CPEN, CPSC, and ELEC courses so I decided to pursue the Informatics stream while taking some courses that overlapped with the Systems and Signals stream.
                <br />
                <br />
                If you are in the specializations curriculum, choosing your technical electives might be a bit harder to figure out since you are faced with a huge list of electives and you might not know how to satisfy the requirements. I would recommend to first look at the streams to see what kind of subjects you enjoy (Informatics - CPSC/CPEN, Biomechanics and Biomaterials - MECH, Systems and Signals - ELEC, Cellular - MICB/CHBE), and look at the stream electives list as a comprehensive guide of what courses you might want to take.
                <br />
                <br />
                In the case you find yourself wanting to take more electives than the required amount, it is possible to take extra courses even outside the list of technical electives to explore your interests. I would reach out to SBME Student Services if they can count certain electives outside of the list as part of your degree since some courses might be eligible for approval to count towards your technical electives requirements.
                <br />
                <br />
                If you are interested in taking CPSC/CPEN electives, I would highly advise you to take CPEN 221 instead of CPEN 223 in 2nd year so you can take CPSC 221 (pre-reqs are CPEN 221 with either MATH 220 or CPSC 121). CPSC 221 is generally one of the pre-reqs for the upper level CPSC/CPEN courses in the technical electives list.
            </p>
        </div>

        <h3 className='blogpost__section__title'>Parting words</h3>
        <div className='blogpost__section__body'>
            <p>
                At the end of the day, the technical electives let you explore what you like and don&apos;t like. Don&apos;t be afraid of reaching out to professors and upper year students to ask about courses and their advice. I would check out the <a className='link' target='_blank' rel='noopener noreferrer' href='https://www.reddit.com/r/BMEG/'>BMEG Reddit</a> as past students leave course reviews, and this <a className='link' target='_blank' rel='noopener noreferrer' href='https://docs.google.com/spreadsheets/d/1mx7LyDsvWd91xz02KM4TONPdYCS35O-0akQ7jdQ6Xwk/edit?usp=sharing'>BMEG Degree Planner</a> I made to plan my courses.
            </p>
        </div>
    </section>
)

export default BmegElectivesGuide
