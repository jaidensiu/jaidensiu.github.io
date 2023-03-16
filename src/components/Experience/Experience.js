import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Experience.css'

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section'>
      <h2 className='section__title'>Experience</h2>

      <div className='projects__grid'>
        {experiences.map((experience) => (
          <ProjectContainer key={uniqid()} project={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experience
