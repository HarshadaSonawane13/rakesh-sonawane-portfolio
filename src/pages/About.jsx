import {
  BookOpen,
  GraduationCap,
  Microscope,
  ScrollText,
  Sprout,
  UserRound,
  UsersRound,
} from 'lucide-react'
import './About.css'

const professionalInfo = [
  {
    label: 'Designation',
    value: 'Assistant Professor',
    Icon: UserRound,
  },
  {
    label: 'Specialization',
    value: 'Plant Pathology',
    Icon: Sprout,
  },
  {
    label: 'Research Interests',
    value: 'Plant diseases, crop protection, sustainable agriculture',
    Icon: Microscope,
  },
  {
    label: 'Focus Areas',
    value: 'Research, education and farmer outreach',
    Icon: UsersRound,
  },
]

const qualifications = [
  {
    degree: 'B.Sc. (Agri)',
    year: '1992',
    description: 'Bachelor of Science in Agriculture',
    Icon: GraduationCap,
  },
  {
    degree: 'M.Sc. (Agri)',
    year: '1994',
    description: 'Master of Science in Agriculture (Microbiology)',
    Icon: BookOpen,
  },
  {
    degree: 'Ph.D. (Agri)',
    year: '2011',
    description: 'Doctor of Philosophy in Agriculture (Microbiology)',
    Icon: ScrollText,
  },
]

function LeafOutline({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 150 180"
      aria-hidden="true"
      fill="none"
    >
      <path d="M4 177C40 133 45 78 35 7" />
      <path d="M36 45C15 34 10 18 12 3c18 9 27 22 24 42Z" />
      <path d="M40 72C58 55 74 54 88 61 73 76 58 81 40 72Z" />
      <path d="M31 94C10 86 2 72 2 57c20 6 31 18 29 37Z" />
      <path d="M27 125C43 105 59 101 74 105 63 123 47 131 27 125Z" />
      <path d="M18 147C4 138-1 126 1 113c16 8 23 19 17 34Z" />
      <path d="M35 45 13 5M31 94 3 58M40 72l47-11M27 125l46-19M18 147 2 115" />
    </svg>
  )
}

function SectionEyebrow({ children }) {
  return (
    <div className="about-eyebrow">
      <span aria-hidden="true" />
      <p>{children}</p>
      <span aria-hidden="true" />
    </div>
  )
}

function About() {
  return (
    <section id="about" className="about-page portfolio-section">
      <section className="about-banner" aria-labelledby="about-page-title">
        <LeafOutline className="banner-leaf banner-leaf-left" />
        <LeafOutline className="banner-leaf banner-leaf-right" />
        <div className="about-banner-inner">
          <div className="banner-eyebrow">
            <p>About Me</p>
            <span aria-hidden="true" />
          </div>
          <h1 id="about-page-title">About Me</h1>
          <p className="about-subtitle">
            Understanding plant health for resilient agriculture
          </p>
        </div>
      </section>

      <section className="introduction-section" aria-labelledby="introduction-title">
        <div className="introduction-grid">
          <div className="portrait-frame">
            <div
              className="portrait-placeholder"
              role="img"
              aria-label="Replaceable portrait placeholder for Dr. Rakesh Sonawane"
            >
              <UserRound aria-hidden="true" strokeWidth={1.25} />
              <span>Portrait placeholder</span>
            </div>
          </div>

          <article className="introduction-copy">
            <SectionEyebrow>Introduction</SectionEyebrow>
            <h2 id="introduction-title">Dr. Rakesh Sonawane</h2>
            <p className="introduction-designation">
              Assistant Professor | Plant Pathology
            </p>
            <p>
              I am an Assistant Professor in Plant Pathology with a strong
              interest in understanding plant diseases and developing
              sustainable solutions for crop protection. My work focuses on
              research, education and extension activities to support resilient
              agriculture and improve farmers&apos; livelihoods.
            </p>
            <p>
              I am committed to contributing through scientific research,
              practical recommendations and farmer-oriented programs for the
              benefit of the farming community.
            </p>
          </article>

          <aside className="professional-card" aria-label="Professional information">
            {professionalInfo.map(({ label, value, Icon }) => (
              <div className="professional-row" key={label}>
                <span className="professional-icon" aria-hidden="true">
                  <Icon size={25} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{label}</h3>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="education-section" aria-labelledby="education-title">
        <div className="education-inner">
          <SectionEyebrow>Educational Qualifications</SectionEyebrow>
          <h2 id="education-title">Academic Background</h2>
          <div className="academic-timeline">
            {qualifications.map(({ degree, year, description, Icon }) => (
              <article className="timeline-stage" key={degree}>
                <div className="qualification-heading">
                  <span className="qualification-icon" aria-hidden="true">
                    <Icon size={25} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3>{degree}</h3>
                    <p>{year}</p>
                  </div>
                </div>
                <span className="timeline-dot" aria-hidden="true" />
                <p className="qualification-description">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
