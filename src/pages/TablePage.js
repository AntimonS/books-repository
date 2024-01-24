import Table from "../components/Table";

function TablePage() {
  const config = [
    { label: "Title", render: (book) => book.title },
    { label: "Author", render: (book) => book.author },
    { label: "Pages", render: (book) => book.pages },
  ];

  return (
    <div>
      <Table config={config} />
    </div>
  );
}

export default TablePage;
