import TableBody from "./TableBody";

function Table2() {
  /*const compareByTitle = (a, b) => {
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
*/
  const tableDataCss = "px-3 border-separate border-4";

  return (
    <div className="grid  grid-cols-1 justify-items-center">
      <table>
        <thead className="cursor-pointer hover:bg-gray-100 text-2xl border-4 ">
          <tr>
            <th className={tableDataCss}>Title</th>
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
