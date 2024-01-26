import { Fragment } from "react";

function Table({ config, keyFn, books }) {
  const renderedHeaders = config.map((columnConfig) => {
    if (columnConfig.header) {
      return (
        <Fragment key={columnConfig.label}>{columnConfig.header()}</Fragment>
      );
    }
    return <th key={columnConfig.id}>{columnConfig.label}</th>;
  });

  const renderedBooksInfo = books.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className="p-4 text-2xl border-2 shadow-md">
        {column.render(rowData)}
      </td>
    ));
    return <tr key={keyFn(rowData)}>{renderedCells}</tr>;
  });

  return (
    <table className="table-auto border-spacing-4">
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody className="border-4">{renderedBooksInfo}</tbody>
    </table>
  );
}

export default Table;
