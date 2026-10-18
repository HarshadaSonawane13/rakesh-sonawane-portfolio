import { LeafLogo } from './Navbar'
import './Footer.css'

const footerLinks = [
  ['home', 'Home'],
  ['about', 'About'],
  ['research', 'Research'],
  ['publications', 'Publications'],
  ['extension', 'Extension'],
  ['academics', 'Academics'],
  ['gallery', 'Gallery'],
  ['contact', 'Contact'],
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="/#home" aria-label="Return to home">
          <LeafLogo />
          <span>
            <strong>Dr. Rakesh Sonawane</strong>
            <small>Assistant Professor | Plant Pathology</small>
          </span>
        </a>
        <span className="footer-divider" aria-hidden="true" />
        <nav aria-label="Footer navigation">
          {footerLinks.map(([id, label]) => (
            <a
              key={id}
              href={`/#${id}`}
              className={id === 'contact' ? 'active' : ''}
              aria-current={id === 'contact' ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
