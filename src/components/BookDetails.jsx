import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BookDetails.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const dispatch= useDispatch();
  function removeHandle(){
    dispatch(removeItem());
  }

  useEffect(() => {
    async function fetchBook() {
      const res = await fetch(
        `https://api.itbook.store/1.0/books/${id}`
      );
      const data = await res.json();
      setBook(data);
    }

    fetchBook();
  }, [id]);

  if (!book) return <h2>Loading...</h2>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <h2>{book.subtitle}</h2><br />
        <p>{book.desc}</p>
      <img src={book.image} alt={book.title} /> 
      <div className="buttons">
        <button className="add" onClick={() => dispatch(addItem(book))}>Add to Cart</button>
      <button className="remove" onClick={removeHandle}>Remove Item</button>
      </div>
      
    </div>
  );
}

export default BookDetails;
