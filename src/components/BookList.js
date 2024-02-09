import Header from "./Header";
//import Table2 from "./Table2";
import TablePage from "../pages/TablePage";
//import BooksContext from "../context/books";
import { useContext } from "react";

function BookList() {
  return (
    <div className="flex flex-col text-4xl shadow-md">
      <Header header="list" />
      <TablePage />
    </div>
  );
}

export default BookList;
