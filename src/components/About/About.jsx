import uniqid from 'uniqid'
import { about } from '../../portfolio'
import './About.css'

const About = () => (
  <section id='about' className='section'>
    <h2 className='about__section__title'>About</h2>
    <div className="about__image__container">
      <img className='about__image' src={about.photo} alt='me' />
    </div>
    <div className='about__facts__container'>
      {about.facts.map((item) => (
        <li className='about__facts' key={uniqid()}>{item}</li>
      ))}
    </div>
  </section>
)

export default About
