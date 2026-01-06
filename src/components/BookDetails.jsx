import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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
      <h2>{book.subtitle}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.desc}</p>
    </div>
  );
}

export default BookDetails;
