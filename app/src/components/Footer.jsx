import '../styles/footer.css'
import fbIcon from '../assets/icons/fb.svg'
import igIcon from '../assets/icons/ig.svg'
import ytIcon from '../assets/icons/yt.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <img src={fbIcon} alt="purrfect haven fb" className="social-icon" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <img src={igIcon} alt="purrfect haven instagram" className="social-icon" />
            </a>
            
            <a 
              href="https://www.youtube.com/watch?v=8CBjKLGwLqE" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on YouTube"
            >
              <img src={ytIcon} alt="purrfect haven youtube" className="social-icon" />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pets">Find a Pet</Link></li>
              <li><a href="#privacy">Privacy Policy</a></li>  {/* stays as <a> — it's an in-page anchor, not a route */}
            </ul>
        </div>

        {/* About */}
        <div className="footer-section">
          <h3>About</h3>
          <p className="tagline"><em>Every pet deserves a loving home.</em></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2026 Purrfect Haven. </p>
      </div>
    </footer>
  )
}

export default Footer