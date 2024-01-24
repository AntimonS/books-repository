import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";
import Input from "./Input";
import Header from "./Header";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [pages, setPages] = useState(book.pages);
  const { handleEditBookById } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditBookById(book.id, title, author, pages);
    onSubmit();
  };

  return (
    <div>
      <Header action="Edit" />
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Title"
        />

        <Input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          label="Author"
        />
        <Input
          onChange={(e) => setPages(e.target.value)}
          value={pages}
          label="Pages"
          type="number"
        />

        <button>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
