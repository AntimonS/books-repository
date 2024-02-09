import Input from "./Input";
import UseBooks from "../hooks/use-books";

function SearchBar() {
  const { term, setTerm } = UseBooks();

  const handleChange = (evt) => {
    setTerm(evt.target.value);
  };

  return (
    <div className="grid justify-items-center ">
      <Input
        type="search"
        onChange={handleChange}
        placeholder="find a book"
        value={term}
        name="searchForm"
      />
    </div>
  );
}

export default SearchBar;
