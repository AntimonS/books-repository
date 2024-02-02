import Input from "./Input";
import Form from "./Form";
import UseBooks from "../hooks/use-books";
import { useState } from "react";

function SearchBar() {
  const { searchBooks } = UseBooks();
  const [term, setTerm] = useState("");

  const handleChange = (evt) => {
    setTerm(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchBooks(term);
  };

  return (
    <div className="grid justify-items-center ">
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          placeholder="search books"
          value={term}
        />
      </Form>
    </div>
  );
}

export default SearchBar;
