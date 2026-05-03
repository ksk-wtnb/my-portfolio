import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav>
        <span className="logo">BENA</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        {isOpen && (
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
