import { Link } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Header() {
// const { loggedInUser } = useContext(userContext);
const data= useContext(userContext);
  
const cartItems= useSelector((store)=> store.cart.items);
  return (
    <header className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>   
         <li>{data.loggedInUser}</li>
         <li>{cartItems.length} items in cart</li>
      </ul>
    </header>
  );
}

export default Header;
