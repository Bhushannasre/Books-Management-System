import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-section">
        <ul className="heading">
          <li>Help</li>
          <li>Company Policy</li>
          <li>Language</li>
        </ul>
      </div>

      <div className="footer-section">
        <ol>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Support</a></li>
        </ol>
      </div>
      <div>
        copyright@
      </div>
    </footer>
  );
}

export default Footer;
