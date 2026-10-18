import { Microscope, Sprout, Users } from 'lucide-react'

const features = [
  {
    title: 'Research Driven',
    description: 'Evidence-based solutions for crop protection',
    Icon: Microscope,
  },
  {
    title: 'Farmer Centric',
    description: 'Knowledge for real impact',
    Icon: Users,
  },
  {
    title: 'Sustainable Agriculture',
    description: 'Healthier crops for future generations',
    Icon: Sprout,
  },
]

function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="Portfolio highlights">
      <div className="feature-list">
        {features.map(({ title, description, Icon }) => (
          <article className="feature-item" key={title}>
            <span className="feature-icon" aria-hidden="true">
              <Icon size={32} strokeWidth={1.7} />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeatureStrip
