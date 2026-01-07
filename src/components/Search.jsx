import {  useState } from "react";
import BookList from "./BookList";
import "./Search.css";
import useFetch from "../utils/useFetch";

function Search() {
  const [query, setQuery] = useState("");

  const { data, error, loading } = useFetch(
    "https://api.itbook.store/1.0/search/mongodb"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  const filteredBooks = (data?.books || []).filter((book) =>
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
