import { useState } from "react";
import UseBooks from "../hooks/use-books";
import Button from "./Button";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [rating, setRating] = useState(book.rating);
  const { handleEditBookById, books } = UseBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditBookById(book.id, title, author, rating);
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
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            label="Rating"
          />

          <Button>Save</Button>
        </Form>
      </div>
    </>
  );
}

export default BookEdit;
