import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);

  const { handleAddBook } = useContext(BooksContext);

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
    handleAddBook(title, author, pages);
    setTitle("");
    setAuthor("");
    setPages(0);
  };

  return (
    <div class="container ">
      <form onSubmit={handleSubmit}>
        <div class="input-group sticky-top">
          <label class="input-group-text">Add a Book</label>

          <input
            type="text"
            onChange={handleChangeTitle}
            value={title}
            placeholder="Enter a Title"
            class="form-control"
          />

          <input
            type="text"
            onChange={handleChangeAuthor}
            value={author}
            placeholder="Enter an Author"
            class="form-control"
          />

          <input
            class="form-cotrol"
            type="number"
            onChange={handleChangePages}
            value={pages}
          />
          <button class="btn btn-success btn-sm">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
/*
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>
*/
