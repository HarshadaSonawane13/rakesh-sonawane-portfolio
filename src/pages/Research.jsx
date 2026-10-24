import {
  Award,
  BarChart3,
  ClipboardList,
  FileText,
  FlaskConical,
  Microscope,
  Settings,
  Sprout,
} from 'lucide-react'
import './Research.css'

const focusAreas = [
  {
    title: 'Plant Diseases',
    description:
      'Study of important fruit and vegetable diseases, diagnosis and management.',
    Icon: Sprout,
  },
  {
    title: 'Crop Protection',
    description:
      'Development and evaluation of effective and sustainable crop protection strategies.',
    Icon: Settings,
  },
  {
    title: 'Sustainable Agriculture',
    description:
      'Research for eco-friendly disease management approaches to support resilient agriculture.',
    Icon: BarChart3,
  },
]

const contributions = [
  { value: '2', label: 'Varieties Released', Icon: Sprout },
  { value: '14', label: 'Technologies Developed', Icon: FlaskConical },
  { value: '11', label: 'Awards & Recognitions', Icon: Award },
  {
    value: '₹1.25 Cr',
    label: 'Receipts from Product Testing Fee (Rs.)',
    Icon: ClipboardList,
  },
  { value: '11', label: 'Research Projects', Icon: FileText },
  { value: '3', label: 'Laboratory Development', Icon: Microscope },
]

function ResearchLabel({ children }) {
  return (
    <div className="research-label">
      <span aria-hidden="true" />
      <p>{children}</p>
    </div>
  )
}

function Research() {
  return (
    <section id="research" className="research-page portfolio-section">
      <header className="research-banner" aria-labelledby="research-title">
        <svg
          className="research-botanical"
          viewBox="0 0 120 180"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 178C42 127 42 72 35 4" />
          <path d="M35 42C15 33 10 17 13 3c17 8 25 21 22 39ZM39 70c18-17 34-18 49-10-14 16-31 20-49 10ZM31 99C10 91 2 76 3 61c19 6 30 19 28 38ZM27 129c16-19 32-23 47-18-11 18-27 25-47 18Z" />
        </svg>
        <div className="research-banner-inner">
          <div className="research-banner-copy">
            <div className="research-banner-eyebrow">
              <p>Research</p>
              <span aria-hidden="true" />
            </div>
            <h2 id="research-title">Research</h2>
            <p>Understanding plant diseases for resilient and sustainable agriculture</p>
            <span className="research-title-accent" aria-hidden="true" />
          </div>
        </div>
      </header>

      <div className="research-content">
        <section className="research-block" aria-labelledby="research-focus-title">
          <ResearchLabel>Research Focus</ResearchLabel>
          <h3 id="research-focus-title" className="sr-only">Research Focus</h3>
          <div className="focus-grid">
            {focusAreas.map(({ title, description, Icon }) => (
              <article className="focus-card" key={title}>
                <span className="research-icon-circle" aria-hidden="true">
                  <Icon size={31} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-block" aria-labelledby="contributions-title">
          <ResearchLabel>Major Research Contributions</ResearchLabel>
          <h3 id="contributions-title" className="sr-only">
            Major Research Contributions
          </h3>
          <div className="contribution-grid">
            {contributions.map(({ value, label, Icon }) => (
              <article className="contribution-card" key={label}>
                <div className="contribution-top">
                  <span className="metric-icon" aria-hidden="true">
                    <Icon size={25} strokeWidth={1.65} />
                  </span>
                  <strong>{value}</strong>
                </div>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

      </div>
    </section>
  )
}

export default Research
