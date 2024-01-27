import { useContext } from "react";
import BooksContext from "../context/books";

function Link({ to, children }) {
  const { navigate } = useContext(BooksContext);
  const handleClick = (evt) => {
    if (evt.metaKEy || evt.ctrlKey) {
      return;
    }
    evt.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
