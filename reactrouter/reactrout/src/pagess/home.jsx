import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="page home-page">
      <section className="hero-section">
        <p className="eyebrow">LEARN WITH PURPOSE</p>
        <h1>Build skills that move you forward.</h1>
        <p className="hero-copy">
          Practical courses, thoughtful guidance, and a community that helps
          you turn curiosity into capability.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/courses">Explore courses</Link>
          <Link className="button button-secondary" to="/about">Our approach</Link>
        </div>
      </section>

      <section className="feature-grid" aria-label="Learning benefits">
        <article className="feature-card"><span>01</span><h2>Learn by doing</h2><p>Build real projects that make every lesson stick.</p></article>
        <article className="feature-card"><span>02</span><h2>Move at your pace</h2><p>Clear lessons designed for busy, curious people.</p></article>
        <article className="feature-card"><span>03</span><h2>Stay supported</h2><p>Get the context and confidence to keep going.</p></article>
      </section>
    </main>
  )
}

export default Home