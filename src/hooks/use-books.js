import BooksContext from "../context/books";
import { useContext } from "react";

function UseBooks() {
  return useContext(BooksContext);
}

export default UseBooks;
