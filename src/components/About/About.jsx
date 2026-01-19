import uniqid from 'uniqid';
import MarkdownText from '../Utils/MarkdownText';
import { about } from '../../portfolio';
import './About.css';

const About = () => (
  <section id='about' className='section'>
    <h2 className='about__section__title'>About</h2>
    <div className="about__image__container">
      <img className='about__image' src={about.photo} alt='me' />
    </div>
    <h3 className='about__subsection__title'>Work</h3>
    <div className='about__facts__container'>
      {about.work.map((item) => (
        <li className='about__facts' key={uniqid()}>
          <MarkdownText>{item}</MarkdownText>
        </li>
      ))}
    </div>
    <h3 className='about__subsection__title'>Outside Work</h3>
    <div className='about__facts__container'>
      {about.outsideWork.map((item) => (
        <li className='about__facts' key={uniqid()}>
          <MarkdownText>{item}</MarkdownText>
        </li>
      ))}
    </div>
  </section>
);

export default About;
