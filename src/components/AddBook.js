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

  /*
  const [didEdit, setDidEdit] = useState({
    title: false,
    author: false,
    rating: false,
  });*/
  const titleInvalid = bookData.title.trim() !== "";
  const authorInvalid = bookData.author.length === 0;
  const ratingInvalid = bookData.rating.length === 0;

  const handleIputChange = (identifier, value) => {
    setBookData((prevData) => ({
      ...prevData,
      [identifier]: value,
    }));
  };
  /*
  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook(bookData.title, bookData.author, bookData.rating);
    setBookData({
      title: "",
      author: "",
      rating: "",
    });
  };

  return (
    <>
      <Header header="Add" />

      <div className=" flex justify-center ">
        <Form onSubmit={handleSubmit}>
          <Input
            label="Title"
            onChange={(evt) => handleIputChange("title", evt.target.value)}
            id={"title"}
            value={bookData.title}
            placeholder="Enter a Title"
            name="title"
            error={titleInvalid && "title field must not be empty!"}

            // onBlur={() => handleInputBlur("title")}
          />
          <Input
            label="Author"
            onChange={(evt) => handleIputChange("author", evt.target.value)}
            id={"author"}
            value={bookData.author}
            placeholder="Enter an Author"
            name="author"
            error={authorInvalid && "author field must not be empty!"}
          />
          <Input
            label="Rating"
            type="select"
            id={"select"}
            onChange={(evt) => handleIputChange("rating", evt.target.value)}
            value={bookData.rating}
            name="select"
            error={ratingInvalid && "rating field must not be empty!"}
          />
          <Button>Add A Book</Button>
        </Form>
      </div>
    </>
  );
}

export default AddBook;
