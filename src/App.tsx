import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'

const isMobile:boolean = window.innerWidth <= 768

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog isMobile={isMobile} />} />
      </Routes>
    </Router>
  )
}

export default App
