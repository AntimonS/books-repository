import "./index.css";
//import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
//import AddBook from "./components/AddBook";
import TablePage from "./pages/TablePage";

export default function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  <h1>Reading List:</h1>;

  return (
    <div>
      <TablePage />
    </div>
  );
}
