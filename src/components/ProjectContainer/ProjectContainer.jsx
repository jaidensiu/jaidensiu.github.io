import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import WebsiteIcon from '@material-ui/icons/Public'
import SourceCodeIcon from '@material-ui/icons/Code'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <p className='project__title'>{project.name}</p>
    <p className='project__description'>{project.description}</p>

    {project.photo && (
      <img src={project.photo} alt={project.name} className='project__photo' />
    )}
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>{item}</li>
        ))}
      </ul>
    )}
    <div className="project__links">
      {project.sourceCode && (
        <a href={project.sourceCode} aria-label='source code' className='link link--icon' target='_blank' rel='noopener noreferrer'>
          <SourceCodeIcon />
        </a>
      )}
      {project.github && (
        <a href={project.github} aria-label='github' className='link link--icon' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon />
        </a>
      )}
      {project.website && (
        <a href={project.website} aria-label='website' className='link link--icon' target='_blank' rel='noopener noreferrer'>
          <WebsiteIcon />
        </a>
      )}
      {project.livePreview && (
        <a href={project.livePreview} aria-label='live preview' className='link link--icon' target='_blank' rel='noopener noreferrer'>
          <LaunchIcon />
        </a>
      )}
    </div>

  </div>
)

export default ProjectContainer