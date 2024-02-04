import { useState } from "react";
import UseBooks from "../hooks/use-books";
import Button from "./Button";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";

function BookEdit({ book, onSubmit }) {
  const { handleEditBookById } = UseBooks();

  const [editValue, setEditValue] = useState({
    title: book.title,
    author: book.author,
    rating: book.rating,
  });

  const handleEditChange = (identifier, value) => {
    setEditValue((prevValue) => ({ ...prevValue, [identifier]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditBookById(
      book.id,
      editValue.title,
      editValue.author,
      editValue.rating
    );
    onSubmit();
  };

  return (
    <>
      <Header header="Edit" />
      <div className=" flex justify-center ">
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(evt) => handleEditChange("title", evt.target.value)}
            value={setEditValue.title}
            label="Title"
            name="title"
          />

          <Input
            onChange={(evt) => handleEditChange("author", evt.target.value)}
            value={editValue.author}
            label="Author"
            name="author"
          />
          <Input
            onChange={(evt) => handleEditChange("rating", evt.target.value)}
            value={editValue.rating}
            label="Rating"
            name="rating"
          />

          <Button>Save</Button>
        </Form>
      </div>
    </>
  );
}

export default BookEdit;
