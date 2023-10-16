import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h3>{experience.company}</h3>
    <p className='experience__role'>{experience.role}</p>
    <p className='experience__date'>{experience.date}</p>

    <p className='experience__description'>{experience.description}</p>
    {experience.stack && (
      <ul className='experience__stack'>
        {experience.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {experience.livePreview && (
      <a
        href={experience.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ExperienceContainer
