import uniqid from 'uniqid'
import { notes } from '../../portfolio'
import NoteContainer from '../NoteContainer/NoteContainer'
import './Notes.css'

const Notes = () => (
  <section id='notes' className='section'>
    <h2 className='notes__section__title'>Notes</h2>
    <div className='notes__grid'>
      {notes.map((note) => (
        <NoteContainer key={uniqid()} note={note} />
      ))}
    </div>
  </section>
)

export default Notes