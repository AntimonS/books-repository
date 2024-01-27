import { useState, useContext } from "react";
import Button from "./Button";
import BookEdit from "./BookEdit";
import Header from "./Header";
import TablePage from "../pages/TablePage";
import BooksContext from "../context/books";

function BookList({ book }) {
  const { handleDeleteBookById, books } = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    handleDeleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = (
    <div className="flex flex-col justify-center my-4 p-3 text-4xl shadow-md">
      <Header header="list" />
      <TablePage />
    </div>
  );

  if (showEdit) {
    books.map((book) => {
      return (content = (
        <BookEdit key={book.id} book={book} onSubmit={handleSubmit} />
      ));
    });
  }

  return (
    <div>
      {content}
      <Button onClick={handleEditClick}>Edit</Button>
      <Button onClick={handleDeleteClick}>Delete</Button>
    </div>
  );
}

export default BookList;
