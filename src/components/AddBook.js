import UseBooks from "../hooks/use-books";
import { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";
import Button from "./Button";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");

  const { handleAddBook } = UseBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook(title, author, rating);
    
    setTitle("");
    setAuthor("");
    setRating("");
  };

  return (
    <>
      <Header header="Add" />

      <div className=" flex justify-center ">
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
            label="Rating"
            type="select"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
          <Button>Add A Book</Button>
        </Form>
      </div>
    </>
  );
}

export default AddBook;
