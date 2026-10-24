import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['research', 'Research'],
  ['publications', 'Publications'],
  ['extension', 'Extension'],
  ['academics', 'Academics'],
  ['gallery', 'Gallery'],
  ['contact', 'Contact'],
]

export function LeafLogo() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 54 54"
      role="img"
      aria-label="Two green leaves"
    >
      <path
        d="M25.6 44.8C13.9 40.9 7.1 31.2 8.2 18.3c10.9.5 18.1 7 18.5 17.9"
        fill="#244D0A"
      />
      <path
        d="M27.7 39.3C27.9 22.4 35.3 10.7 48 6.8c1.5 17.4-5.2 29-20.3 32.5Z"
        fill="#326710"
      />
      <path d="M27 48.3c-.5-15.7 4.8-27 15.7-34" fill="none" stroke="#FAF9F2" strokeWidth="1.5" />
      <path d="M26.6 47.8c-.7-10.6-5.4-18.4-13.3-23" fill="none" stroke="#FAF9F2" strokeWidth="1.35" />
    </svg>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()

  useEffect(() => {
    let frameId

    const updateActiveSection = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 280)
      let currentSection = 'home'

      navigation.forEach(([id]) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    const handlePositionChange = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', handlePositionChange, { passive: true })
    window.addEventListener('resize', handlePositionChange)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handlePositionChange)
      window.removeEventListener('resize', handlePositionChange)
    }
  }, [])

  const scrollToSection = (event, id) => {
    event.preventDefault()
    setIsOpen(false)
    setActiveSection(id)
    navigate(`/#${id}`)
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <a
          className="brand"
          href="/#home"
          aria-label="Dr. Rakesh Sonawane home"
          onClick={(event) => scrollToSection(event, 'home')}
        >
          <LeafLogo />
          <span className="brand-copy">
            <strong>Dr. Rakesh Sonawane</strong>
            <span>Assistant Professor | Plant Pathology</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? ' is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`/#${id}`}
              className={activeSection === id ? 'active' : ''}
              aria-current={activeSection === id ? 'page' : undefined}
              onClick={(event) => scrollToSection(event, id)}
            >
              {label}
            </a>
          ))}
        </nav>

        {activeSection !== 'home' && (
          <button className="search-button" type="button" aria-label="Search">
            <Search size={19} strokeWidth={1.8} />
          </button>
        )}
      </div>
    </header>
  )
}

export default Navbar
