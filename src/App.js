import "./index.css";
import BookEdit from "./components/BookEdit";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./components/AddBook";
import Route from "./components/Route";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
export default function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  <h1>Reading List:</h1>;

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
    </div>
  );
}
