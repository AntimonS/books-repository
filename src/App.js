import "./index.css";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./components/AddBook";
import TablePage from "./pages/TablePage";
//import Table from "./components/Table";
import Link from "./components/Link";

export default function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  <h1>Reading List:</h1>;

  return (
    <div>
      <Link to="/addBook">Go to addBook</Link>
      <Link to="/table">Go to table </Link>
    </div>
  );
}
/*  <AddBook />
<TablePage />*/
