import axios from "axios";
import { useState, useRef } from "react";
import Input from "./Input";
import Form from "./Form";
import BookCard from "./BookCard";

function SearchBar2() {
  const [bookData, setBookData] = useState("");
  const [foundBook, setFoundBook] = useState({});
  const bookCard = useRef();

  const searchBook = async (bookData) => {
    const response = await axios.get("http://localhost:3001/books/");
    return response?.data?.filter((book) => {
      if (book.title.includes(bookData) || book.author.includes(bookData)) {
        setFoundBook(book);
      }
      return false;
    });
  };

  const handleChange = (evt) => {
    setBookData(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    searchBook(bookData);
    bookCard.current.showModal();
    setBookData("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          label="browse books"
          id="browse books"
          value={bookData}
          onChange={handleChange}
        />
        <button>Submit</button>
      </Form>

      <BookCard
        ref={bookCard}
        title={foundBook.title}
        author={foundBook.author}
        rating={foundBook.rating}
      />
    </div>
  );
}

export default SearchBar2;
