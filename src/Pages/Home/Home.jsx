import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrapper">

      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span className="highlight">InstaBoard</span>
        </h1>
        <p className="hero-description">
          Discover amazing people. Like your favorites. Stay connected.
        </p>
        <div className="hero-buttons">
          <Link to="/team" className="btn-primary">
            <i className="icon">👤</i> Meet The Team →
          </Link>
          <Link to="/about" className="btn-secondary">
            <i className="icon">ℹ️</i> About Us
          </Link>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Explore Profiles</h3>
            <p className="feature-text">
              Get to know random users from around the world in one click.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3 className="feature-title">Like Users</h3>
            <p className="feature-text">
              Mark your favorites and save them locally using localStorage.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">ℹ️</div>
            <h3 className="feature-title">View Details</h3>
            <p className="feature-text">
              See full user info including email, location, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}