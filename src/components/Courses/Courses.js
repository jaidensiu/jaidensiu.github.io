import uniqid from 'uniqid'
import { courses } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Courses.css'

const Courses = () => {
  if (!courses.length) return null

  return (
    <section id='courses' className='section courses'>
      <h2 className='section__title'>Relevant Courses</h2>

      <div className='courses_grid'>
        {courses.map((course) => (
          <ProjectContainer key={uniqid()} project={course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
