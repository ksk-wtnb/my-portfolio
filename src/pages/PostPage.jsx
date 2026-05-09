import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ node: _node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} style={oneDark} {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

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
      <ReactMarkdown components={{ code: CodeBlock }}>{content}</ReactMarkdown>
    </article>
  )
}

export default PostPage
