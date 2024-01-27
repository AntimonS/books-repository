import { useContext } from "react";
import BooksContext from "../context/books";

function Route({ path, children }) {
  const { currentPath } = useContext(BooksContext);

  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
