import { useState, useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import Header from "./Header";
import Form from "./Form";
import BooksContext from "../context/books";
function BookEdit() {
  const { handleEditBookById, editingBook, setEditingBook, navigate } =
    useContext(BooksContext);

  const [editValue, setEditValue] = useState({
    title: editingBook?.title ?? "-",
    author: editingBook?.author,
    rating: editingBook?.rating,
  });

  const handleEditChange = (identifier, value) => {
    setEditValue((prevValue) => ({ ...prevValue, [identifier]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditBookById(
      editingBook.id,
      editValue.title,
      editValue.author,
      editValue.rating
    );
    navigate("/allBooks");
    setEditingBook({});
  };

  return (
    <>
      <Header header="Edit" />
      <div className=" flex justify-center ">
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(evt) => handleEditChange("title", evt.target.value)}
            value={editValue.title}
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
