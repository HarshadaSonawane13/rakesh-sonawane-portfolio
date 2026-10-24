import {
  FileText,
  GraduationCap,
  School,
  UsersRound,
} from 'lucide-react'
import './Academics.css'

const contributions = [
  {
    number: '4',
    title: 'M.Sc. Students Guided',
    description: 'Guiding postgraduate students in plant pathology research.',
    Icon: GraduationCap,
  },
  {
    number: '2',
    title: 'Ph.D. Students SAC Member',
    description:
      'Serving as Subject Advisory Committee (SAC) member for Ph.D. students.',
    Icon: UsersRound,
  },
  {
    title: 'Teaching',
    description:
      'Teaching for one year at Chhatrapati Shivaji Maharaj Krishi Vidnyan Sankul, which includes the Government College of ABM, Kashti, and the Agricultural Polytechnic, Kashti, Malegaon.',
    Icon: School,
  },
  {
    title: 'Examination Duties',
    description:
      'Acting as external examiner for ELP module examinations of B.Sc. Agri students and M.Sc. thesis viva examinations.',
    Icon: FileText,
  },
]

function AcademicsLabel({ children }) {
  return (
    <div className="academics-label">
      <p>{children}</p>
      <span aria-hidden="true" />
    </div>
  )
}

function Academics() {
  return (
    <section id="academics" className="academics-page portfolio-section">
      <header className="academics-banner" aria-labelledby="academics-title">
        <div className="academics-banner-inner">
          <div className="academics-eyebrow">
            <p>Academics</p>
            <span aria-hidden="true" />
          </div>
          <h2 id="academics-title">Academics</h2>
          <p>Teaching, mentoring and contributing to academic excellence</p>
          <span className="academics-title-accent" aria-hidden="true" />
        </div>
      </header>

      <div className="academics-content">
        <section aria-labelledby="contributions-heading">
          <AcademicsLabel>Key Academic Contributions</AcademicsLabel>
          <h3 id="contributions-heading" className="sr-only">
            Key Academic Contributions
          </h3>
          <div className="academic-contribution-grid">
            {contributions.map(({ number, title, description, Icon }) => (
              <article className="academic-contribution-card" key={title}>
                <span className="academic-icon-circle" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.55} />
                </span>
                <div>
                  <div className="academic-contribution-heading">
                    {number && <strong>{number}</strong>}
                    <h4>{title}</h4>
                  </div>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </section>
  )
}

export default Academics
