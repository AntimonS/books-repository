import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, books } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>{column.label}</th>
      ),
    };
  });

  //Sort samo ako sortOrder&&sortBy nisu null
  //napraviti kopiju(map)prop
  //naći odgovarajuću funkciju i iskoristiti je za sortiranje

  let sortedBooks = books;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedBooks = [...books].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reversedOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reversedOrder;
      } else {
        return (valueA - valueB) * reversedOrder;
      }
    });
    console.log(sortedBooks);
  }
  return (
    <div>
      {sortOrder}-{sortBy}
      <Table {...props} books={sortedBooks} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
