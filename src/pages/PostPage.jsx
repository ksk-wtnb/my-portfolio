import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function PostPage() {
  const { id } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    import(`../data/posts/${id}.md?raw`).then((module) => {
      setContent(module.default)
    })
  }, [id])

  return (
    <article>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}

export default PostPage
