import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-wrapper">

      <main className="about-content">
        <h1 className="page-title">About <span className="highlight">InstaBoard</span></h1>

        <section className="about-section">
          <p>
            Welcome to <strong>InstaBoard</strong> — your space to share moments, express creativity,
            and connect with people through visuals. Whether you're an artist, a traveler, or someone who loves
            capturing everyday life, InstaBoard gives you a place to post your photos, like others' posts, and explore inspiring content.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-subtitle">Built with Modern Tools</h2>
          <p>
            InstaBoard was created with simplicity and community in mind. We aim to provide a clean and intuitive user interface
            powered by <strong>React</strong>, while taking advantage of modern libraries like <strong>React Router</strong> and <strong>CSS Modules</strong> for seamless navigation and responsive design.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-subtitle">Learning & Development</h2>
          <p>
            This project is part of a hands-on learning journey, helping us understand how to manage routing,
            share data between pages using <strong>useLocation</strong>, and control page behavior using <strong>useEffect</strong>.
            We also use <strong>localStorage</strong> to keep track of users' liked posts and preferences.
          </p>
        </section>

        <div className="about-buttons">
          <Link to="/team" className="btn-primary">
            <i className="icon">👤</i> Meet The Team →
          </Link>
          <Link to="/" className="btn-secondary">
            <i className="icon">🏠</i> Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}