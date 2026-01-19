import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="heading">Help</h4>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="heading">Company Policy</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="heading">Language</h4>
          <ul className="footer-links">
            <li><a href="#">English</a></li>
            <li><a href="#">Hindi</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Book Management System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
