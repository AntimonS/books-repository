import "bootstrap/dist/css/bootstrap.css";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./components/AddBook";

export default function App() {
  const { books, fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <h1 class="text-start mb-3  bg-info">Reading List:</h1>
      <AddBook />
      <BookList books={books} />
    </div>
  );
}
