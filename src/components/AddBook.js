import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";
import Input from "./Input";
import Header from "./Header";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);

  const { handleAddBook } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook(title, author, pages);
    setTitle("");
    setAuthor("");
    setPages(0);
  };

  return (
    <>
      <Header action="Add" />
      <div className="flex justify-center border">
        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter a Title"
          />

          <Input
            label="Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            placeholder="Enter an Author"
          />

          <Input
            label="Pages"
            type="number"
            onChange={(e) => setPages(e.target.value)}
            value={pages}
          />
          <div className="flex flex-col my-5 size-1">
            <button>Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBook;
