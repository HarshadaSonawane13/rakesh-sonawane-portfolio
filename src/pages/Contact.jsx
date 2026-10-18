import { useState } from 'react'
import {
  BriefcaseBusiness,
  CirclePlay,
  ExternalLink,
  Mail,
  Send,
} from 'lucide-react'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const contactLinks = [
  {
    title: 'Email',
    text: 'rbsonawane21@gmail.com',
    href: 'mailto:rbsonawane21@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    title: 'LinkedIn',
    text: 'https://www.linkedin.com/in/rakesh-sonawane',
    href: 'https://www.linkedin.com/in/rakesh-sonawane',
    Icon: BriefcaseBusiness,
    external: true,
  },
  {
    title: 'YouTube Channel',
    text: 'https://www.youtube.com/@RakeshSonawane',
    href: 'https://www.youtube.com/@RakeshSonawane',
    Icon: CirclePlay,
    external: true,
  },
]

function ContactLabel({ children, centered = false }) {
  return (
    <div className={`contact-label${centered ? ' centered' : ''}`}>
      <span aria-hidden="true" />
      <p>{children}</p>
      {centered && <span aria-hidden="true" />}
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setStatus('')
  }

  const submitForm = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!form.subject) nextErrors.subject = 'Please select a subject.'
    if (!form.message.trim()) nextErrors.message = 'Please enter your message.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('Please correct the highlighted fields.')
      return
    }

    const emailSubject = `${form.subject} — message from ${form.name}`
    const emailBody = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n')

    setErrors({})
    setStatus(
      'Your email application is opening with this message. Please send it there to complete your inquiry.',
    )
    window.location.href = `mailto:rbsonawane21@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  }

  return (
    <section id="contact" className="contact-page portfolio-section">
      <header className="contact-banner" aria-labelledby="contact-title">
        <div className="contact-banner-inner">
          <div className="contact-eyebrow">
            <p>Contact</p>
            <span aria-hidden="true" />
          </div>
          <h2 id="contact-title">Get in Touch</h2>
          <p>Let&apos;s connect for research, collaboration, and knowledge sharing</p>
          <span className="contact-title-accent" aria-hidden="true" />
        </div>
      </header>

      <div className="contact-content">
        <div className="contact-left-column">
          <section className="contact-card" aria-labelledby="contact-info-title">
            <ContactLabel>Contact Information</ContactLabel>
            <h3 id="contact-info-title" className="sr-only">Contact Information</h3>
            <div className="contact-information-list">
              {contactLinks.map(({ title, text, href, Icon, external }) => (
                <article className="contact-information-item" key={title}>
                  <span className="contact-icon-circle" aria-hidden="true">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                    >
                      {text}
                    </a>
                  </div>
                  {external && <ExternalLink size={16} aria-hidden="true" />}
                </article>
              ))}
            </div>
          </section>

          <section className="contact-card connect-card" aria-labelledby="connect-title">
            <ContactLabel centered>Connect With Me</ContactLabel>
            <h3 id="connect-title" className="sr-only">Connect With Me</h3>
            <p>
              I am always open to discussions on plant pathology, crop protection
              and sustainable agriculture. Feel free to reach out for
              collaboration, expert talks, training programs or general inquiries.
            </p>
            <div className="social-links">
              {contactLinks.map(({ title, href, Icon, external }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </section>
        </div>

        <section className="contact-card message-card" aria-labelledby="message-title">
          <ContactLabel>Send a Message</ContactLabel>
          <h3 id="message-title" className="sr-only">Send a Message</h3>
          <form noValidate onSubmit={submitForm}>
            <label>
              <span>Name <b aria-hidden="true">*</b></span>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Your Name"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                onChange={updateField}
              />
              {errors.name && <small id="name-error">{errors.name}</small>}
            </label>

            <label>
              <span>Email <b aria-hidden="true">*</b></span>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Your Email"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                onChange={updateField}
              />
              {errors.email && <small id="email-error">{errors.email}</small>}
            </label>

            <label>
              <span>Subject <b aria-hidden="true">*</b></span>
              <select
                name="subject"
                value={form.subject}
                required
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                onChange={updateField}
              >
                <option value="">Select Subject</option>
                <option>Research Collaboration</option>
                <option>Plant Pathology Consultation</option>
                <option>Expert Talk / Guest Lecture</option>
                <option>Training Program</option>
                <option>Academic Inquiry</option>
                <option>General Inquiry</option>
              </select>
              {errors.subject && <small id="subject-error">{errors.subject}</small>}
            </label>

            <label>
              <span>Message <b aria-hidden="true">*</b></span>
              <textarea
                name="message"
                value={form.message}
                placeholder="Your Message"
                rows="5"
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                onChange={updateField}
              />
              {errors.message && <small id="message-error">{errors.message}</small>}
            </label>

            <button type="submit">
              <Send size={18} aria-hidden="true" />
              Send Message
            </button>
            {status && (
              <p
                className={`form-status${Object.keys(errors).length ? ' error' : ''}`}
                role={Object.keys(errors).length ? 'alert' : 'status'}
              >
                {status}
              </p>
            )}
          </form>
        </section>
      </div>
    </section>
  )
}

export default Contact
