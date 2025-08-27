import './footer.css';

export default function Footer({ darkMode }) {
  return (
    <footer className={`logo ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo-img">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Thekra logo" />
      </div>
      <p className="logo-text">© 2025 InstaBoard. All rights reserved.</p>
    </footer>
  )
}
