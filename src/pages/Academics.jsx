import {
  Building2,
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
      'Teaching at Government College of Agriculture, ABM, Kashti, Malegaon and Agricultural Polytechnic, Kashti, Malegaon.',
    Icon: School,
  },
  {
    title: 'Examination Duties',
    description:
      'Acting as examiner for module examinations and M.Sc. thesis viva examinations.',
    Icon: FileText,
  },
]

const teachingResponsibilities = [
  {
    title: 'Government College of Agriculture, ABM, Kashti, Malegaon',
    points: [
      'Teaching undergraduate courses related to plant pathology.',
      'Practical and field-based training for B.Sc. (Agri.) students.',
      'Guidance on crop protection and disease management.',
    ],
    Icon: School,
  },
  {
    title: 'Agricultural Polytechnic, Kashti, Malegaon',
    points: [
      'Teaching diploma-level courses related to plant protection and crop health.',
      'Practical training and hands-on diagnostic skills.',
      'Guidance on sustainable and farmer-oriented plant disease management.',
    ],
    Icon: Building2,
  },
]

const studentGuidance = [
  {
    title: 'M.Sc. Students Guided',
    description:
      'Guided 4 M.Sc. students in plant pathology research, experimentation and thesis work.',
    number: '4',
    badge: 'M.Sc. Students',
    Icon: GraduationCap,
  },
  {
    title: 'Ph.D. Students SAC Member',
    description:
      'Serving as Subject Advisory Committee (SAC) member for 2 Ph.D. students in plant pathology.',
    number: '2',
    badge: 'Ph.D. Students',
    Icon: UsersRound,
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

        <section className="academic-section" aria-labelledby="teaching-heading">
          <AcademicsLabel>Teaching Responsibilities</AcademicsLabel>
          <h3 id="teaching-heading" className="sr-only">
            Teaching Responsibilities
          </h3>
          <div className="teaching-grid">
            {teachingResponsibilities.map(({ title, points, Icon }) => (
              <article className="teaching-card" key={title}>
                <div className="teaching-card-heading">
                  <span className="academic-icon-circle" aria-hidden="true">
                    <Icon size={26} strokeWidth={1.55} />
                  </span>
                  <h4>{title}</h4>
                </div>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="academic-section" aria-labelledby="guidance-heading">
          <AcademicsLabel>Student Guidance</AcademicsLabel>
          <h3 id="guidance-heading" className="sr-only">Student Guidance</h3>
          <div className="student-guidance-grid">
            {studentGuidance.map(
              ({ title, description, number, badge, Icon }) => (
                <article className="student-guidance-card" key={title}>
                  <span className="academic-icon-circle" aria-hidden="true">
                    <Icon size={28} strokeWidth={1.55} />
                  </span>
                  <div className="student-guidance-copy">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                  <div className="student-number-panel" aria-label={`${number} ${badge}`}>
                    <strong>{number}</strong>
                    <span>{badge}</span>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Academics
