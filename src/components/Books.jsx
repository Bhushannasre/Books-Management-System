import "./style.css";
function Books({ booksDetails }) {
  return (
    <div className="book-card">
      <img
        src={booksDetails.coverImage}
        alt={booksDetails.title}
        width="200"
        height="200"
        className="book-cover"
      />
      <div className="book-details">
        <h2 className="book-title">Title: {booksDetails.title}</h2>
        <p className="book-author">Author: {booksDetails.author}</p>
        <p className="book-description">{booksDetails.description}</p>
      </div>
    </div>
  );
}

export default Books;
