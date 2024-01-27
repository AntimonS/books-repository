import { useContext } from "react";
import BooksContext from "../context/books";
//import Table from "../components/Table";
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
    {
      label: "Actions",
      render: (book) => book.actions,
    },
  ];

  const keyFn = (book) => {
    return book.id;
  };

  return (
    <div className="flex flex-row justify-center">
      <SortableTable books={books} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
