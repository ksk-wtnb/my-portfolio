import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<HeroSection name="BENA" catchphrase="こんにちは" />}
        />
        <Route
          path="/about"
          element={
            <section id="about">
              <h2>About</h2>
              <p>自己紹介テキストをここに書く</p>
            </section>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
