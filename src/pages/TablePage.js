import { useContext } from "react";
import BooksContext from "../context/books";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const { books } = useContext(BooksContext);

  const config = [
    {
      label: "Name",
      render: (book) => book.title,
      sortValue: (book) => book.title,
    },
    {
      label: "Author",
      render: (book) => book.author,
      sortValue: (book) => book.author,
    },
    {
      label: "Pages",
      render: (book) => book.pages,
      sortValue: (book) => book.pages,
    },
  ];

  const keyFn = (book) => {
    return book.title;
  };

  return (
    <div>
      <SortableTable books={books} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
