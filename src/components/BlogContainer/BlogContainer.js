import uniqid from 'uniqid'
import './BlogContainer.css'

const BlogContainer = ({ blog }) => (
    <div className='blog'>
        <a href={blog.link} className="blog__fonts link" rel="noopener noreferrer">{blog.name}</a>
        <p className='blog__date'>{blog.date}</p>
        <p className='blog__description'>{blog.description}</p>
  </div>
)

export default BlogContainer
