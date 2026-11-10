import { Link, NavLink, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">REACT LAB • EXPERIMENT 12</p>
      <h1>Welcome to <span>Home Page</span></h1>
      <p className="lead">
        This is the home page of our React Single Page Application.
        Explore the sections using the navigation above.
      </p>
      <Link className="primary-button" to="/about">Explore our app <span aria-hidden="true">→</span></Link>
      <div className="hero-note">
        <span className="note-dot" />
        Navigate between pages without a full browser reload.
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-panel">
      <p className="eyebrow">GET TO KNOW US</p>
      <h1>About <span>Us</span></h1>
      <p className="lead">
        We are learning React Router step by step. React Router helps create
        multiple views in a React application while keeping navigation smooth.
      </p>
      <div className="info-grid">
        <article className="info-card">
          <span className="card-number">01</span>
          <h2>Single Page</h2>
          <p>The application loads one main HTML page.</p>
        </article>
        <article className="info-card">
          <span className="card-number">02</span>
          <h2>Client-side routing</h2>
          <p>Routes display the correct component based on the URL.</p>
        </article>
        <article className="info-card">
          <span className="card-number">03</span>
          <h2>Fast navigation</h2>
          <p>Links switch views without a traditional full-page reload.</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="content-panel contact-panel">
      <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
      <h1>Contact <span>Us</span></h1>
      <p className="lead">For enquiries, reach us using the contact detail below.</p>
      <div className="contact-card">
        <div className="contact-icon">@</div>
        <div>
          <p className="contact-label">EMAIL ADDRESS</p>
          <a href="mailto:student@example.com">student@example.com</a>
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">ERROR 404</p>
      <h1>Page not <span>found.</span></h1>
      <p className="lead">The page you are looking for does not exist.</p>
      <Link className="primary-button" to="/">Return Home <span aria-hidden="true">→</span></Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="React SPA home">
          <span className="brand-mark">R</span>
          <span>REACT<span className="brand-light">SPACE</span></span>
        </Link>
        <nav className="navigation" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <span className="header-tag">SINGLE PAGE APP</span>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>REACTSPACE</span>
        <span>Built with React Router</span>
        <span>EXPERIMENT 12</span>
      </footer>
    </div>
  );
}