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
    return book.id;
  };

  return (
    <div>
      <div className="flex flex-row justify-center my-4 p-3 text-4xl shadow-md">
        <h2>All Books</h2>
      </div>
      <div className="flex flex-row justify-center">
        <SortableTable books={books} config={config} keyFn={keyFn} />
      </div>
    </div>
  );
}

export default TablePage;
