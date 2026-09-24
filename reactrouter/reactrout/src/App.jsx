
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import './App.css'
import About from './pagess/about.jsx'
import Contact from './pagess/contact.jsx'
import Courses from './pagess/courses.jsx'
import Home from './pagess/home.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <header className="site-header">
        <Link className="brand" to="/">learnly<span>.</span></Link>
        <nav aria-label="Main navigation">
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="site-footer"><span>learnly.</span><span>Make room for better questions.</span></footer>
    </BrowserRouter>
  )
}

export default App