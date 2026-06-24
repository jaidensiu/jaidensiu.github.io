import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import ResumeIcon from '@mui/icons-material/Description'
import Gif from '../Access/gopher-shaking.gif'
import { home } from '../../portfolio'
import './Home.css'

const Home = () => {
  const { photo, name, role, description, contact } = home
  const descriptionParagraph = description && description.length !== 0 ? description.split('\n') : []

  return (
    <section id='home' className='section'>
      <div className='home center'>
        {name && (
          <h1 className='extra__padding'>
            Hi, my name is <span className='home__name'>{name}</span>
            <img src={Gif} alt='gif' className='gif' />
          </h1>
        )}
        {photo && (
          <div className='image__cropper'>
            <img alt='Avatar placeholder' className='profile__pic' src={photo} />
          </div>
        )}
        {role && (
          <h3 className='home__role'>{role}</h3>
        )}
        {descriptionParagraph.length > 0 && (
          <div>
            {descriptionParagraph.map((paragraph, index) => (
              <p key={index} className='home__desc'>{paragraph}</p>
            ))}
          </div>
        )}
        <div className='home__contact'>
          {contact && (
            <>
              {contact.resume && (
                <a
                  href={contact.resume}
                  aria-label='resume'
                  className='link link--icon'
                  rel='noopener noreferrer'
                >
                  <ResumeIcon />
                </a>
              )}
              {contact.github && (
                <a
                  href={contact.github}
                  aria-label='github'
                  className='link link--icon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon />
                </a>
              )}

              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedInIcon />
                </a>
              )}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  aria-label='email'
                  className='link link--icon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <EmailIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home
