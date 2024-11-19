import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Article from './pages/Article/Article'

const isMobile: boolean = window.innerWidth <= 768

function App() {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade-scale" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog isMobile={isMobile} />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
)

export default WrappedApp
