import { useContext } from "react";
import BooksContext from "../context/books";

function Link({ to, children }) {
  const { navigate } = useContext(BooksContext);
  const handleClick = (evt) => {
    evt.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
