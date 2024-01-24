import { useState, useContext } from "react";
import BooksContext from "../context/books";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";
import Button from "./Button";

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

      <div className=" flex justify-center">
        <Form onSubmit={handleSubmit}>
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
          <Button>Add</Button>
        </Form>
      </div>
    </>
  );
}

export default AddBook;
