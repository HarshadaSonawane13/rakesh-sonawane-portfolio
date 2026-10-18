import { ArrowRight, Leaf, Mail } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="eyebrow-row">
          <p className="eyebrow">Academic Portfolio</p>
          <span aria-hidden="true" />
        </div>
        <h1 id="hero-title">Dr. Rakesh Sonawane</h1>
        <p className="designation">Assistant Professor | Plant Pathology</p>
        <span className="title-accent" aria-hidden="true" />
        <p className="hero-description">
          Focused on understanding plant diseases, developing sustainable
          solutions and supporting resilient agriculture through research,
          education and farmer outreach.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#about">
            <Leaf size={19} aria-hidden="true" />
            Explore My Profile
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contact">
            <Mail size={19} aria-hidden="true" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
