import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import type { Experience } from '../../portfolio'
import MarkdownText from '../Utils/MarkdownText'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }: { experience: Experience }) => (
  <div className='experience'>
    <a href={experience.companyLink} className='experience__company link' target='_blank' rel='noopener noreferrer'>{experience.company}</a>
    <p className='experience__role'>{experience.role}</p>
    <p className='experience__date'>{experience.date}</p>
    {experience.description && (
      <MarkdownText>{experience.description}</MarkdownText>
    )}
    {experience.stack && (
      <ul className='experience__stack'>
        {experience.stack.map((item) => (
          <li key={item} className='experience__stack-item'>{item}</li>
        ))}
      </ul>
    )}
    {experience.sourceCode && (
      <a href={experience.sourceCode} aria-label='source code' className='link link--icon' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon />
      </a>
    )}
    {experience.livePreview && (
      <a href={experience.livePreview} aria-label='live preview' className='link link--icon' target='_blank' rel='noopener noreferrer'>
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ExperienceContainer
