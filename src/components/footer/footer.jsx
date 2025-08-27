import './footer.css';

export default function Footer({ darkMode }) {
  return (
    <footer className={`logo ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo-img">
        <img src="/images/logo.png" alt="ThekraLogo"/>
      </div>
      <p className="logo-text">© 2025 InstaBoard. All rights reserved.</p>
    </footer>
  )
}
