import { useContext } from "react";
import BooksContext from "../context/books";

function Table() {
  const { books } = useContext(BooksContext);
  const renderedBooksInfo = books.map((book) => (
    <tr className="border-b" key={book.id}>
      <td className="p-3">{book.title}</td>
      <td className="p-3">{book.author}</td>
      <td className="p-3">{book.pages}</td>
    </tr>
  ));

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
        </tr>
      </thead>
      <tbody>{renderedBooksInfo}</tbody>
    </table>
  );
}

export default Table;
