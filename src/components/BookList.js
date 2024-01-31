import Header from "./Header";
import Table2 from "./Table2";

function BookList() {
  return (
    <div className="flex flex-col text-4xl shadow-md">
      <Header header="list" />
      <Table2 />
    </div>
  );
}

export default BookList;
