import { useState } from "react";
import TableBody from "./TableBody";
import UseBooks from "../hooks/use-books";

function Table2() {
  const { books } = UseBooks();
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
        <TableBody tableDataCss={tableDataCss} />
      </table>
    </div>
  );
}

export default Table2;
