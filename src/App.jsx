import BookList from "./components/BookList";
import { booksData } from "./utils/mockData";

function App() {
  return (
    <>
      <BookList booksDatas={booksData} />
    </>
  );
}

export default App;
