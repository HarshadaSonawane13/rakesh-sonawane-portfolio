import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import './Gallery.css'

const galleryImages = [
  {
    src: '/img1.jpeg',
    alt: 'Students and faculty participating in an agricultural field activity',
  },
  {
    src: '/img2.jpeg',
    alt: 'Delegates attending an agricultural exhibition',
  },
  {
    src: '/img3.jpeg',
    alt: 'Dr. Rakesh Sonawane at the International Conference on Pomegranate 2026',
  },
  {
    src: '/img4.jpeg',
    alt: 'Visitors and faculty at the Onion and Grape Research Centre',
  },
  {
    src: '/img5.jpeg',
    alt: 'Agricultural exhibition presentation featuring a garlic crop sample',
  },
  {
    src: '/img6.jpeg',
    alt: 'Dr. Rakesh Sonawane with a colleague at an agricultural exhibition',
  },
  {
    src: '/img7.jpeg',
    alt: 'Research team visiting a plant quarantine facility',
  },
  {
    src: '/img8.jpeg',
    alt: 'Rows of healthy plants growing inside a protected nursery',
  },
]

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const closeLightbox = () => setActiveIndex(null)
  const showPrevious = () => {
    setActiveIndex((current) => (
      current === 0 ? galleryImages.length - 1 : current - 1
    ))
  }
  const showNext = () => {
    setActiveIndex((current) => (
      current === galleryImages.length - 1 ? 0 : current + 1
    ))
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <section
      id="gallery"
      className="gallery-page portfolio-section"
      aria-labelledby="gallery-title"
    >
      <div className="gallery-inner">
        <h2 id="gallery-title">Gallery</h2>
        <span className="gallery-title-accent" aria-hidden="true" />

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              className="gallery-item"
              type="button"
              key={image.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image ${index + 1} of ${galleryImages.length}: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${activeIndex + 1} of ${galleryImages.length}`}
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            <X size={27} aria-hidden="true" />
          </button>

          <button
            className="lightbox-nav lightbox-previous"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            aria-label="View previous image"
          >
            <ChevronLeft size={31} aria-hidden="true" />
          </button>

          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
            />
            <p>{activeIndex + 1} / {galleryImages.length}</p>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            aria-label="View next image"
          >
            <ChevronRight size={31} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
