import { Link } from "react-router-dom";
import Books from "./Books";
import "./style.css";


function BookList({ books = [] }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Link to={`/book/${book.id}`}><Books key={book.id} book={book} /></Link>
        
      ))}
    </div>
  );
}

export default BookList;
