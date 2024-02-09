import { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [editingBook, setEditingBook] = useState({});
  const [term, setTerm] = useState("");

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  /*
  const searchBook = async (term) => {
    const response = await axios.get(`http://localhost:3001/books/`);
    return response?.data?.filter((book) => {
      if (book.title.includes(term)) {
        return true;
      }
      if (book.author.includes(term)) {
        return true;
      }

      return false;
    });
  };*/

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const handleEditBookById = async (id, newTitle, newAuthor, newRating) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
      author: newAuthor,
      rating: newRating,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleAddBook = async (title, author, rating) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
      author,
      rating,
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
        term,
        setTerm,
        editingBook,
        setEditingBook,
        books,
        currentPath,
        navigate,
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
