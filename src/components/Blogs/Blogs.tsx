import { blogs } from '../../portfolio'
import BlogContainer from '../BlogContainer/BlogContainer'
import './Blogs.css'

const Blogs = () => (
  <section id='blogs' className='section'>
    <h2 className='blogs__section__title'>Blogs</h2>
    <div className='blogs__grid'>
      {blogs.map((blog) => (
        <BlogContainer key={blog.link} blog={blog} />
      ))}
    </div>
  </section>
)

export default Blogs
