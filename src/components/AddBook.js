import { useState, useContext } from "react";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";
import Button from "./Button";
import BooksContext from "../context/books";

function AddBook() {
  const { handleAddBook } = useContext(BooksContext);
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    rating: "",
  });
  const [didEdit, setDidEdit] = useState({
    title: false,
    author: false,
    rating: false,
  });
  const titleInvalid = didEdit.title && bookData.title.length === 0;
  const authorInvalid = didEdit.author && bookData.author.length === 0;
  const ratingInvalid = didEdit.rating && bookData.rating.length === 0;

  const handleIputChange = (identifier, value) => {
    setBookData((prevData) => ({
      ...prevData,
      [identifier]: value,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

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
            id="title"
            onChange={(evt) => handleIputChange("title", evt.target.value)}
            value={bookData.title}
            placeholder="Enter a Title"
            onBlur={() => handleInputBlur("title")}
          />
          <div>{titleInvalid && <p>title field must not be empty!</p>}</div>
          <Input
            label="Author"
            id="author"
            onChange={(evt) => handleIputChange("author", evt.target.value)}
            value={bookData.author}
            placeholder="Enter an Author"
            onBlur={() => handleInputBlur("author")}
          />
          <div>{authorInvalid && <p>author field must not be empty!</p>}</div>

          <Input
            label="Rating"
            id="rating"
            type="select"
            onChange={(evt) => handleIputChange("rating", evt.target.value)}
            value={bookData.rating}
            onBlur={() => handleInputBlur("rating")}
          />
          <div>{ratingInvalid && <p>rating field must not be empty!</p>}</div>

          <Button>Add A Book</Button>
        </Form>
      </div>
    </>
  );
}

export default AddBook;
