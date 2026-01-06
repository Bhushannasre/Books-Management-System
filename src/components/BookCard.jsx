import "./style.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.image}
        alt={book.title}
        className="book-cover"
      />

      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.subtitle}</p>
      </div>
    </div>
  );
}

export default BookCard;
