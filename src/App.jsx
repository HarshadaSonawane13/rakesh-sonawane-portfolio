import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import About from './pages/About'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Extension from './pages/Extension'
import Academics from './pages/Academics'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './App.css'

function PortfolioPage() {
  const location = useLocation()

  useEffect(() => {
    const legacySection = location.pathname.split('/').filter(Boolean)[0]
    const sectionId = location.hash.slice(1) || legacySection || 'home'
    const section = document.getElementById(sectionId)

    if (section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({
          behavior: location.hash ? 'smooth' : 'auto',
          block: 'start',
        })
      })
    }
  }, [location.hash, location.pathname])

  return (
    <main>
      <section id="home" className="portfolio-section home-section">
        <Hero />
        <FeatureStrip />
      </section>
      <About />
      <Research />
      <Publications />
      <Extension />
      <Academics />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
