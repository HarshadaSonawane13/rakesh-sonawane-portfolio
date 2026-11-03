import {
  Presentation,
  Radio,
  UsersRound,
} from 'lucide-react'
import './Extension.css'

const keyAreas = [
  {
    title: 'Farmer Outreach',
    description: 'Knowledge sharing for better crop health',
    Icon: UsersRound,
  },
  {
    title: 'Training Programs',
    description: 'Capacity building for farmers and stakeholders',
    Icon: Presentation,
  },
  {
    title: 'Radio Talks',
    description: 'Sharing expert knowledge with a wider community',
    Icon: Radio,
  },
]

const activities = [
  {
    title: 'Farmer Outreach',
    description:
      'Interacting with farmers to share knowledge on plant disease management, crop protection and best agricultural practices.',
    mediaClass: 'farmer-media',
    imageSrc: '/farmer outreach.jpeg',
    imageAlt: 'Farmer outreach session on plant disease management',
  },
  {
    title: 'Training Programs',
    description:
      'Conducting training sessions for farmers, extension workers and stakeholders on plant disease identification and management.',
    mediaClass: 'training-media',
    imageSrc: '/traning program.jpeg',
    imageAlt: 'Training program for farmers and agricultural stakeholders',
  },
  {
    title: 'Radio Talks',
    description:
      'Participating in radio programs to create awareness about plant health, crop protection and sustainable agriculture among farmers.',
    mediaClass: 'radio-media',
    imageSrc: '/radio talk.jpeg',
    imageAlt: 'Dr. Rakesh Sonawane presenting an agricultural radio talk',
    badge: '49 Radio Talks',
  },
]

function ExtensionLabel({ children }) {
  return (
    <div className="extension-label">
      <p>{children}</p>
      <span aria-hidden="true" />
    </div>
  )
}

function Extension() {
  return (
    <section id="extension" className="extension-page portfolio-section">
      <header className="extension-banner" aria-labelledby="extension-title">
        <div className="extension-banner-inner">
          <div className="extension-eyebrow">
            <p>Extension</p>
            <span aria-hidden="true" />
          </div>
          <h2 id="extension-title">Extension Activities</h2>
          <p>Bridging research and farmers for real-world impact</p>
          <span className="extension-title-accent" aria-hidden="true" />
        </div>
      </header>

      <div className="extension-content">
        <section aria-labelledby="key-areas-title">
          <ExtensionLabel>Key Areas</ExtensionLabel>
          <h3 id="key-areas-title" className="sr-only">Key Areas</h3>
          <div className="extension-key-grid">
            {keyAreas.map(({ title, description, Icon }) => (
              <article className="extension-key-item" key={title}>
                <span className="extension-icon-circle" aria-hidden="true">
                  <Icon size={31} strokeWidth={1.65} />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="activities-section" aria-labelledby="activities-title">
          <ExtensionLabel>Extension Activities</ExtensionLabel>
          <h3 id="activities-title" className="sr-only">Extension Activities</h3>
          <div className="activity-grid">
            {activities.map((activity) => {
              const {
                title,
                description,
                mediaClass,
                imageSrc,
                imageAlt,
                badge,
              } = activity

              return (
                <article className="activity-card" key={title}>
                  <div className={`activity-media ${mediaClass}`}>
                    <img
                      className="activity-image"
                      src={imageSrc}
                      alt={imageAlt}
                    />
                  </div>
                  <div className="activity-card-body">
                    <h4>{title}</h4>
                    {badge && <span className="activity-badge">{badge}</span>}
                    <p>{description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Extension
