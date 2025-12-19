import BookList from "./components/BookList";
import { booksData } from "./utils/mockData";
import "./index.css";
import { useState } from "react";
function App() {
   const [searchText, setSearchText] = useState("");
   const [filteredBooks, setFilteredBooks] = useState(booksData);
  function handleSearch() {
    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filteredBooks);
    console.log("Filtered Books:", filteredBooks);
  }
  function clearSearch(){
    setFilteredBooks(booksData);
    setSearchText("");
    window.location.reload();
  }
  return (
    <>
      <h1>Book Management System</h1>
   <div className="search">
  <input type="text" placeholder="Search books..."  className="search-input" onChange={e=>{setSearchText(e.target.value)}}/>
      <button className="search-btn" onClick={handleSearch} >Search</button>
      <button  className="search-btn" onClick={clearSearch}>Clear</button>
   </div>

      <BookList booksDatas={filteredBooks} />
    </>
  );
}

export default App;
