import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";
import Button from "./Button";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";

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
    <>
      <Header header="Edit" />
      <div className=" flex justify-center ">
        <Form onSubmit={handleSubmit}>
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

          <Button>Save</Button>
        </Form>
      </div>
    </>
  );
}

export default BookEdit;
