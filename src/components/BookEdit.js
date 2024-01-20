import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [pages, setPages] = useState(book.pages);
  const { handleEditBookById } = useContext(BooksContext);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleChangePages = (e) => {
    e.preventDefault();
    setPages(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditBookById(book.id, title, author, pages);

    onSubmit();
  };

  return (
    <div>
      <form class="form-control" onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <label class="input-group-text">Title</label>
          <input
            class=" form-control-sm"
            onChange={handleChangeTitle}
            value={title}
          />
        </div>

        <div class="input-group mb-3">
          <label class="input-group-text">Author</label>
          <input
            class=" form-control-sm"
            className="input"
            onChange={handleChangeAuthor}
            value={author}
          />
        </div>

        <div class="input-group mb-3">
          <label class="input-group-text">Pages</label>
          <input
            class=" form-control-sm"
            type="number"
            className="input"
            onChange={handleChangePages}
            value={pages}
          />
        </div>
        <button class="btn btn-primary btn-sm mb-2 mt-2">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
