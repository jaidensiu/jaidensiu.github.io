import uniqid from 'uniqid'
import './NoteContainer.css'

const NoteContainer = ({ note }) => (
    <div className='note'>
        <a href={note.link} className="note__fonts link" rel="noopener noreferrer">{note.name}</a>
        <p className='note__date'>{note.date}</p>
        {note.description.includes('\n') ? (
            <ul>
                {note.description.split('\n').map((item) => (
                    <li key={uniqid()}>{item}</li>
                ))} 
            </ul>
        ) : (
            <p className='note__description'>{note.description}</p>
        )}
  </div>
)

export default NoteContainer
