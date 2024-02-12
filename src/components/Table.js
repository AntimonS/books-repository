import { Fragment } from "react";

function Table({ config, keyFn, books }) {
  const renderedHeaders = config.map((columnConfig) => {
    if (columnConfig.header) {
      return (
        <Fragment key={columnConfig.label}>{columnConfig.header()}</Fragment>
      );
    }
    return <th key={columnConfig.label}>{columnConfig.label}</th>;
  });

  const renderedBooksData = books.map((rowData) => {
    const renderedCells =
      config &&
      config.map((column) => (
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
    <Fragment>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {renderedHeaders}
            </tr>
          </thead>
          <tbody>{renderedBooksData}</tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Table;
