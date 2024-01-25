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
      <td key={column.label} className="p-2">
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr className="border-b" key={keyFn(rowData)}>
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
