import SortableTable from "../components/SortableTable";

function TablePage() {
  const config = [
    {
      label: "Title",
      render: (book) => book.title,
      sortValue: (book) => book.title,
    },
    {
      label: "Author",
      render: (book) => book.author,
      sortValue: (book) => book.title,
    },
    {
      label: "Pages",
      render: (book) => book.pages,
      sortValue: (book) => book.title,
    },
  ];

  const keyFn = (book) => {
    return book.id;
  };

  return (
    <div>
      <SortableTable config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
