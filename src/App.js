import "./index.css";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./pages/AddBook";
import Route from "./components/Route";
import Navbar from "./components/Navbar";
import BookList from "./pages/BookList";
import BookEdit from "./pages/BookEdit";
import SearchBar from "./pages/SearchBar";

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
        <SearchBar />
      </Route>
    </div>
  );
}
