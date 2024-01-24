import { useContext } from "react";
import BooksContext from "../context/books";

function Table({ config }) {
  const { books } = useContext(BooksContext);

  const renderedHeaders = config.map((columnConfig) => (
    <th key={columnConfig.label}>{columnConfig.label}</th>
  ));

  const renderedBooksInfo = books.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className="p-2">
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr className="border-b" key={rowData.id}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedBooksInfo}</tbody>
    </table>
  );
}

export default Table;
