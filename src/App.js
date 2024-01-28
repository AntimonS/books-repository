import "./index.css";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import AddBook from "./components/AddBook";
import TablePage from "./pages/TablePage";
//import Table from "./components/Table";
import Link from "./components/Link";
import Route from "./components/Route";
import Navbar from "./components/Navbar";

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
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}
/*  <AddBook />
<TablePage />*/
