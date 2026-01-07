import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/demo">Demo</Link></li>
      </ul>
    </header>
  );
}

export default Header;
