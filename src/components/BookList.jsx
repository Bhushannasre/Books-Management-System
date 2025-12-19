import Books from "./Books";
import "./style.css";
function BookList({ booksDatas }) {
  return (
    <div className="book-list">
      {booksDatas.map((book) => (
        <Books key={book.id} booksDetails={book} />
      ))}
    </div>
  );
}

export default BookList;
