import { useEffect, useState } from "react";
import BookList from "./BookList";
import "./Search.css";

function Search() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch(
        "https://api.itbook.store/1.0/search/mongodb"
      );
      const data = await res.json();
      setBooks(data.books || []);
    }

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>Book Management System</h1>

      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <BookList books={filteredBooks} />
    </>
  );
}

export default Search;
