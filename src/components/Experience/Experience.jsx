import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experience = () => {
  if (!experiences.length) return null
  return (
    <section id='experience' className='section'>
      <h2 className='experience__section__title'>Experience</h2>
      <div className='experience__grid'>
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experience