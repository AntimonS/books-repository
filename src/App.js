import "./index.css";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./components/AddBook";
import Table from "./components/Table";

export default function App() {
  const { books, fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  <h1>Reading List:</h1>;

  return (
    <div>
      <Table />
    </div>
  );
}
