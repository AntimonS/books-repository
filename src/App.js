import "./index.css";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./components/AddBook";
import Route from "./components/Route";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookEdit from "./components/BookEdit";
import SearchBar2 from "./components/SearchBar2";

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
        <Route path="/allBooks">
          <BookList />
        </Route>
      </div>
      <Route path="/editBook">
        <BookEdit />
      </Route>
      <Route path="/searchBooks">
        <SearchBar2 />
      </Route>
    </div>
  );
}
