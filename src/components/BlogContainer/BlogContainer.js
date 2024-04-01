import uniqid from 'uniqid'
import './BlogContainer.css'

const BlogContainer = ({ blog }) => (
    <div className='blog'>
        <a href={blog.link} className="blog__fonts link" rel="noopener noreferrer">{blog.name}</a>
        <p className='blog__date'>{blog.date}</p>
        {blog.description.includes('\n') ? (
            <ul className='experience__description'>
                {blog.description.split('\n').map((item) => (
                    <li key={uniqid()}>{item}</li>
                ))} 
            </ul>
        ) : (
            <p className='blog__description'>{blog.description}</p>
        )}
  </div>
)

export default BlogContainer
