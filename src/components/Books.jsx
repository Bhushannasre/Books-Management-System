import "./style.css";

function Books({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.coverImage}
        alt={book.title}
        width="200"
        height="200"
        className="book-cover"
      />
      <div className="book-details">
        <h2 className="book-title">Title: {book.title}</h2>
        <p className="book-author">Author: {book.author}</p>
        <p className="book-description">{book.description}</p>
      </div>
    </div>
  );
}

export default Books;
