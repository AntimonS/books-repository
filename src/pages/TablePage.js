import UseBooks from "../hooks/use-books";
//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const { books } = UseBooks();

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
      label: "Rating",
      render: (book) => book.rating,
      sortValue: (book) => book.rating,
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
