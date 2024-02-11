import { MdDelete, MdEdit } from "react-icons/md";
import { useContext } from "react";
import BooksContext from "../context/books";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const { books, navigate, setEditingBook, handleDeleteBookById } =
    useContext(BooksContext);

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
      render: renderActions,
    },
  ];

  function renderActions(book) {
    return (
      <div>
        <button className="p-3" onClick={() => handleEdit(book)}>
          <MdEdit />
        </button>
        <button onClick={() => handleDeleteBookById(book.id)}>
          <MdDelete />
        </button>
      </div>
    );
  }

  function handleEdit(book) {
    setEditingBook(book);
    navigate("/editBook");
  }

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
