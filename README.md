# Experiment 12 – React Single Page Application (SPA)

## Aim
To develop a Single Page Application using React Router and navigate between Home, About and Contact pages without reloading the entire browser page.

## Algorithm
1. Create a React project using Vite.
2. Install the `react-router-dom` package.
3. Import `BrowserRouter` and wrap the main application with it.
4. Create Home, About, Contact and Not Found components.
5. Use `Link` and `NavLink` to provide navigation.
6. Configure application paths using `Routes` and `Route`.
7. Run the application and test each route.

## Program

### `src/main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### `src/App.jsx`
```jsx

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
      <Link className="primary-button" to="/about">
        Explore our app <span>→</span>
      </Link>
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
      <p className="lead">
        For enquiries, reach us using the contact detail below.
      </p>
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
      <p className="lead">
        The page you are looking for does not exist.
      </p>
      <Link className="primary-button" to="/">
        Return Home <span>→</span>
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark">R</span>
          <span>REACT<span className="brand-light">SPACE</span></span>
        </Link>

        <nav className="navigation">
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

```

### `src/App.css`
```jsx

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

:root {
  font-family: "DM Sans", Arial, sans-serif;
  color: #211e1a;
  background: #f4efe6;
  --ink: #211e1a;
  --muted: #777067;
  --gold: #b58a43;
  --paper: #fbf8f2;
  --line: #e4dccf;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

a { color: inherit; text-decoration: none; }

.app-shell {
  width: min(1120px, calc(100% - 48px));
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.site-header {
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--ink);
  color: #f8f1e5;
  font-family: Georgia, serif;
  font-size: 20px;
}

.brand-light { color: var(--gold); }

.navigation {
  display: flex;
  align-items: center;
  gap: 34px;
}

.navigation a {
  color: var(--muted);
  font-size: 13px;
  font-weight: 600;
  padding: 10px 0;
}

.navigation a:hover,
.navigation a.active { color: var(--ink); }

.navigation a.active {
  border-bottom: 2px solid var(--gold);
}

.header-tag {
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 70px 0 86px;
}

.hero {
  max-width: 760px;
  padding: 38px 0 30px 7%;
}

.eyebrow {
  margin: 0 0 22px;
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
}

h1 {
  margin: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(42px, 7vw, 76px);
  line-height: 1.08;
  font-weight: 600;
}

h1 span { color: var(--gold); }

.lead {
  max-width: 570px;
  margin: 25px 0 30px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding: 15px 20px;
  background: var(--ink);
  color: #fffaf1;
  border: 1px solid var(--ink);
  font-size: 12px;
  font-weight: 600;
  transition: background .2s, transform .2s;
}

.primary-button:hover {
  background: #40382e;
  transform: translateY(-2px);
}

.primary-button span {
  color: #d9b775;
  font-size: 18px;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 52px;
  color: #8a8277;
  font-size: 11px;
}

.note-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
}

.content-panel { padding: 12px 4%; }

.content-panel h1 {
  font-size: clamp(40px, 6vw, 64px);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 45px;
}

.info-card {
  min-height: 170px;
  padding: 24px;
  background: var(--paper);
  border: 1px solid var(--line);
}

.card-number {
  color: var(--gold);
  font-size: 11px;
  font-weight: 700;
}

.info-card h2 {
  margin: 18px 0 8px;
  font-family: Georgia, serif;
  font-size: 20px;
}

.info-card p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.contact-panel { max-width: 760px; }

.contact-card {
  display: flex;
  align-items: center;
  gap: 18px;
  width: min(100%, 430px);
  padding: 22px;
  background: var(--paper);
  border: 1px solid var(--line);
}

.contact-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: #eee4d3;
  color: var(--gold);
  font-family: Georgia, serif;
  font-size: 24px;
}

.contact-label {
  margin: 0 0 6px;
  color: var(--muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.6px;
}

.contact-card a {
  font-size: 14px;
  font-weight: 600;
}

.not-found { text-align: center; }

.not-found .lead {
  margin-left: auto;
  margin-right: auto;
}

.site-footer {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-top: 1px solid var(--line);
  color: #91897e;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.4px;
}

.site-footer span:first-child { color: var(--ink); }

@media (max-width: 700px) {
  .app-shell { width: min(100% - 32px, 560px); }
  .site-header {
    min-height: 78px;
    flex-wrap: wrap;
    padding: 16px 0;
  }
  .header-tag { display: none; }
  .navigation { gap: 20px; }
  .main-content { padding: 55px 0 65px; }
  .hero { padding: 15px 0; }
  .info-grid {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
  .info-card { min-height: auto; }
  .site-footer { font-size: 8px; }
}

```

## Output
<img width="928" height="561" alt="image" src="https://github.com/user-attachments/assets/a032501a-c91d-4309-8c80-ef24ab4e8384" />

<img width="914" height="563" alt="image" src="https://github.com/user-attachments/assets/5f1012de-19ac-49a3-b24c-dd8d11031b2a" />

<img width="918" height="510" alt="image" src="https://github.com/user-attachments/assets/80d90498-4824-418e-b0b1-4cad822d82a3" />


## Observation
React Router changes the displayed component according to the URL. Navigation occurs on the client side without a traditional full-page reload.

## Result
Thus, a React Single Page Application was successfully developed using `react-router-dom`.

