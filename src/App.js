import "./index.css";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./components/AddBook";
import Route from "./components/Route";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <Navbar />
      <div>
        <Route path="/addBook">
          <AddBook />
        </Route>
        <Route path="/allbooks">
          <BookList />
        </Route>
      </div>
      <SearchBar />
    </div>
  );
}
