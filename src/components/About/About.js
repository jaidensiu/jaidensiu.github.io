import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo, name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1 className="extra__padding">
          Hi there, my name is <span className='about__name'>{name}.</span>
        </h1>
      )}

      {photo && (
        <div className='image__cropper'>
          <img height="200px" alt="Avatar placeholder" className="profile__pic" src={photo} />
        </div>
      )}

      {role && <h3 className='about__role'>{role}</h3>}

      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
