import posts from '../data/posts.json'
import { Link } from 'react-router-dom'

function BlogPage() {
  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.date}</p>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogPage
