import {
  GoPencil,
  GoTrashcan,
  GoTriangleDown,
  GoTriangleUp,
} from "react-icons/go";
import UseBooks from "../hooks/use-books";
import { useState } from "react";
import BookEdit from "./BookEdit";

function TableBody({ tableDataCss }) {
  const { handleDeleteBookById, books } = UseBooks();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitEdit = () => {
    setIsEditing(false);
  };

  isEditing && <BookEdit book={books} onSubmit={handleSubmitEdit} />;

  const tableBody = books.map((book) => {
    return (
      <tr key={book.id} className={tableDataCss}>
        <td className={tableDataCss}>{book.title}</td>
        <td className={tableDataCss}>{book.author}</td>
        <td className={tableDataCss}>{book.rating}</td>

        <td className="flex items-center">
          <span
            className="p-4 cursor-pointer"
            onClick={() => handleEditClick()}
          >
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

  return <tbody className=" text-2xl border-4">{tableBody}</tbody>;
}

export default TableBody;
