import UseBooks from "../hooks/use-books";
import { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";
import Button from "./Button";

function AddBook() {
  const { handleAddBook } = UseBooks();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    rating: "",
  });

  const handleIputChange = (identifier, value) => {
    setBookData((prevData) => ({
      ...prevData,
      [identifier]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook(bookData.title, bookData.author, bookData.rating);
  };

  return (
    <>
      <Header header="Add" />

      <div className=" flex justify-center ">
        <Form onSubmit={handleSubmit}>
          <Input
            label="Title"
            onChange={(evt) => handleIputChange("title", evt.target.value)}
            value={bookData.title}
            placeholder="Enter a Title"
          />

          <Input
            label="Author"
            onChange={(evt) => handleIputChange("author", evt.target.value)}
            value={bookData.author}
            placeholder="Enter an Author"
          />

          <Input
            label="Rating"
            type="select"
            onChange={(evt) => handleIputChange("rating", evt.target.value)}
            value={bookData.rating}
          />
          <Button>Add A Book</Button>
        </Form>
      </div>
    </>
  );
}

export default AddBook;
