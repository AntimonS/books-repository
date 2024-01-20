import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const handleEditBookById = async (id, newTitle, newAuthor, newPages) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
      author: newAuthor,
      pages: newPages,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleAddBook = async (title, author, pages) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
      author,
      pages,
    });

    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  const handleDeleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        handleEditBookById,
        handleAddBook,
        handleDeleteBookById,
        fetchBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
