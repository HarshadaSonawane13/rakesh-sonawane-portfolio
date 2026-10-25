import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  FileText,
  Filter,
  Library,
  Search,
  Settings,
  Sprout,
  X,
} from 'lucide-react'
import './Publications.css'

const statistics = [
  { value: 35, label: 'Research Articles', Icon: FileText },
  { value: 41, label: 'Technical Papers', Icon: Settings },
  { value: 81, label: 'Extension Papers', Icon: Sprout },
  { value: 4, label: 'Books and Book Chapters', Icon: BookOpen },
]

const publicationTypes = [
  { name: 'Research Article', label: 'Research Articles', count: 35 },
  { name: 'Technical Paper', label: 'Technical Papers', count: 41 },
  { name: 'Extension Paper', label: 'Extension Papers', count: 81 },
  {
    name: 'Books and Book Chapters',
    label: 'Books and Book Chapters',
    count: 4,
  },
]

const publications = publicationTypes.map(({ name }, index) => ({
  id: index + 1,
  type: name,
  title:
    name === 'Books and Book Chapters'
      ? 'Books and Book Chapters'
      : `${name} details to be added`,
  authors: null,
  source: null,
  volume: null,
  issue: null,
  pages: null,
  year: null,
  doi: null,
  url: null,
  abstract: null,
  keywords: [],
}))

function Publications() {
  const [selectedTypes, setSelectedTypes] = useState([])
  const [keyword, setKeyword] = useState('')
  const [year, setYear] = useState('')
  const [appliedFilters, setAppliedFilters] = useState({
    types: [],
    keyword: '',
    year: '',
  })
  const [sortOrder, setSortOrder] = useState('newest')
  const [activePublication, setActivePublication] = useState(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!activePublication) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActivePublication(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activePublication])

  const visiblePublications = useMemo(() => {
    const normalizedKeyword = appliedFilters.keyword.trim().toLowerCase()
    const filtered = publications.filter((publication) => {
      const matchesType =
        appliedFilters.types.length === 0 ||
        appliedFilters.types.includes(publication.type)
      const matchesYear =
        !appliedFilters.year ||
        String(publication.year) === appliedFilters.year
      const searchableText = [
        publication.title,
        publication.type,
        publication.authors,
        publication.source,
        ...publication.keywords,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return (
        matchesType &&
        matchesYear &&
        (!normalizedKeyword || searchableText.includes(normalizedKeyword))
      )
    })

    return [...filtered].sort((a, b) => {
      if (sortOrder === 'title-asc') return a.title.localeCompare(b.title)
      if (sortOrder === 'title-desc') return b.title.localeCompare(a.title)
      if (sortOrder === 'oldest') return (a.year ?? Infinity) - (b.year ?? Infinity)
      return (b.year ?? -Infinity) - (a.year ?? -Infinity)
    })
  }, [appliedFilters, sortOrder])

  const toggleType = (type) => {
    setSelectedTypes((current) =>
      current.includes(type)
        ? current.filter((item) => item !== type)
        : [...current, type],
    )
  }

  const applyFilters = (event) => {
    event.preventDefault()
    setAppliedFilters({ types: selectedTypes, keyword, year })
  }

  const resetFilters = () => {
    setSelectedTypes([])
    setKeyword('')
    setYear('')
    setAppliedFilters({ types: [], keyword: '', year: '' })
  }

  return (
    <section id="publications" className="publications-page portfolio-section">
      <header className="publications-banner" aria-labelledby="publications-title">
        <div className="publications-banner-inner">
          <div className="publications-eyebrow">
            <p>Publications</p>
            <span aria-hidden="true" />
          </div>
          <h2 id="publications-title">Publications</h2>
          <p>Contributing to scientific knowledge for sustainable agriculture</p>
          <span className="publications-title-accent" aria-hidden="true" />
        </div>
      </header>

      <div className="publications-inner">
        <section className="publication-statistics" aria-label="Publication statistics">
          {statistics.map(({ value, label, Icon }) => (
            <article className="publication-stat" key={label}>
              <span className="publication-stat-icon" aria-hidden="true">
                <Icon size={25} strokeWidth={1.65} />
              </span>
              <div>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="publications-layout">
          <aside className="publication-filters" aria-labelledby="filter-title">
            <div className="filter-heading">
              <Filter size={20} aria-hidden="true" />
              <h3 id="filter-title">Filter Publications</h3>
            </div>

            <form onSubmit={applyFilters}>
              <fieldset>
                <legend>Publication Type</legend>
                {publicationTypes.map(({ name, label, count }) => (
                  <label className="filter-checkbox" key={name}>
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(name)}
                      onChange={() => toggleType(name)}
                    />
                    <span>{label} ({count})</span>
                  </label>
                ))}
              </fieldset>

              <label className="filter-control">
                <span>Year</span>
                <select value={year} onChange={(event) => setYear(event.target.value)}>
                  <option value="">All Years</option>
                </select>
              </label>

              <label className="filter-control">
                <span>Keywords</span>
                <span className="keyword-input">
                  <input
                    type="search"
                    value={keyword}
                    placeholder="Search by keyword..."
                    onChange={(event) => setKeyword(event.target.value)}
                  />
                  <Search size={18} aria-hidden="true" />
                </span>
              </label>

              <div className="filter-actions">
                <button type="submit">Apply Filters</button>
                <button type="button" onClick={resetFilters}>Reset</button>
              </div>
            </form>
          </aside>

          <section className="publication-results" aria-labelledby="publication-list-title">
            <div className="publication-list-header">
              <div>
                <FileText size={21} aria-hidden="true" />
                <h3 id="publication-list-title">List of Publications</h3>
                <span aria-hidden="true" />
              </div>
              <label>
                <span>Sort by:</span>
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title-asc">Title A–Z</option>
                  <option value="title-desc">Title Z–A</option>
                </select>
              </label>
            </div>

            <div className="publication-list">
              {visiblePublications.map((publication) => (
                <article
                  className={`publication-card${['Research Article', 'Technical Paper', 'Extension Paper', 'Books and Book Chapters'].includes(publication.type) ? ' document-publication-card' : ''}`}
                  key={publication.id}
                >
                  <span className="publication-number" aria-hidden="true">
                    {publication.id}
                  </span>
                  <div className="publication-summary">
                    {publication.type === 'Research Article' ? (
                      <>
                        <h4>Research Articles</h4>
                        <p className="document-publication-description">
                          View the complete collection of 35 research articles,
                          including authors, paper titles, journal names,
                          publication years, and page details.
                        </p>
                      </>
                    ) : publication.type === 'Technical Paper' ? (
                      <>
                        <h4>Technical Papers</h4>
                        <p className="document-publication-description">
                          Explore the collection of 41 technical papers covering
                          plant pathology, crop disease management, biological
                          control, soil microbiology, and sustainable agriculture.
                        </p>
                      </>
                    ) : publication.type === 'Extension Paper' ? (
                      <>
                        <h4>Extension Papers</h4>
                        <p className="document-publication-description">
                          Explore 81 extension publications covering crop disease
                          management, plant protection, soil microbiology, fruit
                          and vegetable crops, and sustainable agricultural
                          practices.
                        </p>
                      </>
                    ) : publication.type === 'Books and Book Chapters' ? (
                      <>
                        <h4>Books and Book Chapters</h4>
                        <p className="document-publication-description">
                          Explore 2 books and 2 book chapters related to plant
                          pathology and sustainable agriculture.
                        </p>
                      </>
                    ) : (
                      <>
                        <h4>{publication.title}</h4>
                        <p>Authors: Not provided</p>
                        <p>Publication details: Not provided</p>
                        <p>Year: Not provided</p>
                      </>
                    )}
                  </div>
                  <div className="publication-card-actions">
                    <span className="publication-type">
                      {publication.type === 'Research Article'
                        ? 'Research Articles · 35'
                        : publication.type === 'Technical Paper'
                          ? 'Technical Papers · 41'
                          : publication.type === 'Extension Paper'
                            ? 'Extension Papers · 81'
                            : publication.type === 'Books and Book Chapters'
                              ? 'Books and Book Chapters · 4'
                            : publication.type}
                    </span>
                    {publication.type === 'Research Article' ? (
                      <a
                        href="/research-articles.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Details
                        <ArrowRight size={15} aria-hidden="true" />
                      </a>
                    ) : publication.type === 'Technical Paper' ? (
                      <a
                        href="/technical-papers.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-details-button"
                      >
                        View Details <span aria-hidden="true">→</span>
                      </a>
                    ) : publication.type === 'Extension Paper' ? (
                      <a
                        href="/extension-papers.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-details-button"
                      >
                        View Details <span aria-hidden="true">→</span>
                      </a>
                    ) : publication.type === 'Books and Book Chapters' ? (
                      <a
                        href="/documents/RBS-Book-portfolio-2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-details-button"
                      >
                        View Details
                        <ArrowRight size={15} aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActivePublication(publication)}
                      >
                        View Details
                        <ArrowRight size={15} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </article>
              ))}
              {visiblePublications.length === 0 && (
                <p className="no-publications">
                  No placeholder entries match the selected filters.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>

      {activePublication && (
        <div
          className="publication-modal-backdrop"
          role="presentation"
          onMouseDown={() => setActivePublication(null)}
        >
          <section
            className="publication-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="publication-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="modal-close"
              type="button"
              aria-label="Close publication details"
              onClick={() => setActivePublication(null)}
            >
              <X size={21} />
            </button>
            <div className="modal-heading">
              <Library size={25} aria-hidden="true" />
              <div>
                <p>{activePublication.type}</p>
                <h3 id="publication-modal-title">{activePublication.title}</h3>
              </div>
            </div>
            <dl>
              <div><dt>Authors</dt><dd>Not provided</dd></div>
              <div><dt>Journal or publisher</dt><dd>Not provided</dd></div>
              <div><dt>Volume, issue and pages</dt><dd>Not provided</dd></div>
              <div><dt>Year</dt><dd>Not provided</dd></div>
              <div><dt>DOI or URL</dt><dd>Not provided</dd></div>
              <div><dt>Abstract or description</dt><dd>Not provided</dd></div>
            </dl>
          </section>
        </div>
      )}
    </section>
  )
}

export default Publications
