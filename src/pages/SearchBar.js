import axios from "axios";
import { useState, useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Form from "../components/Form";
import BookCard from "./BookCard";
import Header from "../components/Header";

function SearchBar() {
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
    <>
      <Header header="Search" />
      <div className="grid justify-items-center ">
        <Form onSubmit={handleSubmit}>
          <Input
            id="search"
            value={bookData}
            onChange={handleChange}
            placeholder="Search..."
          />
          <Button className="w-42 h-10 py-1">Search</Button>
        </Form>
      </div>
      <BookCard
        ref={bookCard}
        title={foundBook.title}
        author={foundBook.author}
        rating={foundBook.rating}
      />
    </>
  );
}

export default SearchBar;
<div></div>;
