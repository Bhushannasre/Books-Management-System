import { useParams } from "react-router-dom";
import { booksData } from "../utils/mockData";
import "./bookDetails.css";

function BookDetails() {
  const { id } = useParams();

  // params.id is a string → convert to number
  const book = booksData.find(book => book.id === Number(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>

      <img src={book.coverImage} alt={book.title} />

      <p>{book.description}</p>

    
    </div>
  );
}

export default BookDetails;
