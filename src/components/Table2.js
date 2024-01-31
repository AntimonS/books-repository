import {
  GoPencil,
  GoTrashcan,
  GoTriangleDown,
  GoTriangleUp,
} from "react-icons/go";
import UseBooks from "../hooks/use-books";
import { useState } from "react";
import BookEdit from "./BookEdit";

function Table2() {
  const { handleDeleteBookById, books } = UseBooks();
  const [isEditing, setIsEditing] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);

  const compareByTitle = (a, b) => {
    const titleOrder = sortOrder === "asc" ? 1 : -1;
    return a.title.localeCompare(b.title) * titleOrder;
  };

  books.sort(compareByTitle);

  const compareByAuthor = (a, b) => {
    return a.author.localeCompare(b.author);
  };
  books.sort(compareByAuthor);

  const compareByRating = (a, b) => {
    return a.rating.localeCompare(b.rating);
  };
  books.sort(compareByRating);

  const tableDataCss = "px-3 border-separate border-4";

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitEdit = () => {
    setIsEditing(false);
  };

  const tableBody = books.map((book) => {
    return (
      <tr key={book.id}>
        <td className={tableDataCss}>{book.title}</td>
        <td className={tableDataCss}>{book.author}</td>
        <td className={tableDataCss}>{book.rating}</td>

        <td className="flex items-center">
          <span className="p-4 cursor-pointer" onClick={handleEditClick}>
            <GoPencil />
          </span>
          <span
            className="p-4 cursor-pointer"
            onClick={() => handleDeleteBookById(book.id)}
          >
            <GoTrashcan />
          </span>
        </td>
      </tr>
    );
  });

  // isEditing && <BookEdit book={books} onSubmit={handleSubmitEdit} />;

  return (
    <div className="grid  grid-cols-1 justify-items-center">
      <table>
        <thead className="cursor-pointer hover:bg-gray-100 text-2xl border-4 ">
          <tr>
            <th className={tableDataCss} onClick={compareByTitle}>
              Title
            </th>
            <th className={tableDataCss}>Author</th>
            <th className={tableDataCss}>Rating</th>
            <th className={tableDataCss}>Action</th>
          </tr>
        </thead>
        <tbody className=" text-2xl border-4">{tableBody}</tbody>
      </table>
    </div>
  );
}

export default Table2;

/*
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
*/
