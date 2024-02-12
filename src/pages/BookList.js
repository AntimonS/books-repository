import Header from "../components/Header";
import TablePage from "./TablePage";

function BookList() {
  return (
    <div className="flex flex-col text-4xl ">
      <Header header="list" />
      <TablePage />
    </div>
  );
}

export default BookList;
