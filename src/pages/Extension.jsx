import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Presentation,
  Radio,
  Sprout,
  UsersRound,
  X,
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
  {
    title: 'Awareness Campaigns',
    description: 'Promoting plant health and sustainable practices',
    Icon: Sprout,
  },
]

const activities = [
  {
    title: 'Farmer Outreach',
    description:
      'Interacting with farmers to share knowledge on plant disease management, crop protection and best agricultural practices.',
    Icon: UsersRound,
    mediaClass: 'farmer-media',
  },
  {
    title: 'Training Programs',
    description:
      'Conducting training sessions for farmers, extension workers and stakeholders on plant disease identification and management.',
    Icon: Presentation,
    mediaClass: 'training-media',
  },
  {
    title: 'Radio Talks',
    description:
      'Participating in radio programs to create awareness about plant health, crop protection and sustainable agriculture among farmers.',
    Icon: Radio,
    mediaClass: 'radio-media',
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
  const [activeActivity, setActiveActivity] = useState(null)
  const closeButtonRef = useRef(null)
  const ActiveIcon = activeActivity?.Icon

  useEffect(() => {
    if (!activeActivity) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveActivity(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeActivity])

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
              const { title, description, Icon, mediaClass } = activity

              return (
                <article className="activity-card" key={title}>
                  <div
                    className={`activity-media ${mediaClass}`}
                    role="img"
                    aria-label={`${title} image placeholder`}
                  >
                    <span>
                      <Icon size={43} strokeWidth={1.3} aria-hidden="true" />
                      <small>Image to be added</small>
                    </span>
                  </div>
                  <div className="activity-card-body">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <button type="button" onClick={() => setActiveActivity(activity)}>
                      <span aria-hidden="true">
                        <ArrowRight size={17} />
                      </span>
                      View Details
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>

      {activeActivity && (
        <div
          className="extension-modal-backdrop"
          role="presentation"
          onMouseDown={() => setActiveActivity(null)}
        >
          <section
            className="extension-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="extension-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="extension-modal-close"
              type="button"
              aria-label="Close activity details"
              onClick={() => setActiveActivity(null)}
            >
              <X size={21} />
            </button>
            <span className="extension-modal-icon" aria-hidden="true">
              <ActiveIcon size={31} strokeWidth={1.5} />
            </span>
            <p>Extension Activity</p>
            <h3 id="extension-modal-title">{activeActivity.title}</h3>
            <p>{activeActivity.description}</p>
          </section>
        </div>
      )}
    </section>
  )
}

export default Extension
