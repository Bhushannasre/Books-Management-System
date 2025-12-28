import { useState } from "react";
import { booksData } from "../utils/mockData";
import BookList from "./BookList";
import "./search.css";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  function handleSearch() {
    const result = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(result);
  }

  function clearSearch() {
    setFilteredBooks(booksData);
    setSearchText("");
  }

  return (
    <>
      <h1>Book Management System</h1>
<div className="search-bar">
  <input
    type="text"
    placeholder="Search books..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    className="search-input"
  />

  <button onClick={handleSearch} className="search-btn primary">
    Search
  </button>

  <button onClick={clearSearch} className="search-btn secondary">
    Clear
  </button>
</div>

      <BookList books={filteredBooks} />
    </>
  );
}

export default Search;
