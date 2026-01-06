import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import "./style.css";

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Link key={book.isbn13} to={`/book/${book.isbn13}`}>
          <BookCard book={book} />
        </Link>
      ))}
    </div>
  );
}

export default BookList;
