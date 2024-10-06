import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import ResumeIcon from '@material-ui/icons/Description'
import { v4 as uuidv4 } from 'uuid'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
    const { photo, name, role, description, contact } = about
    const descriptionParagraph = description.split('\n')

    return (
        <section id='about' className='section'>
            <div className='about center'>
                {name && (
                    <h1 className="extra__padding">
                        Hi, my name is <span className='about__name'>{name}</span>.
                    </h1>
                )}
                {photo && (
                    <div className='image__cropper'>
                        <img alt="Avatar placeholder" className="profile__pic" src={photo}/>
                    </div>
                )}
                {role && (
                    <h3 className='about__role'>{role}</h3>
                )}
                <div>
                    {descriptionParagraph.map(paragraph => (
                        <p key={uuidv4()} className='about__desc'>{paragraph}</p>
                    ))}
                </div>
                <div className='about__contact'>
                    {contact && (
                        <>
                            {contact.resume && (
                                <a
                                    href={contact.resume}
                                    aria-label='resume'
                                    className='link link--icon'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <ResumeIcon/>
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
                                    <GitHubIcon/>
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
                                    <LinkedInIcon/>
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
                                    <EmailIcon/>
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default About
