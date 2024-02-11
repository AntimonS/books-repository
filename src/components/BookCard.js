import { forwardRef } from "react";
import Button from "./Button";

const bookResult = forwardRef(function BookCard(
  { title, author, rating },
  ref
) {
  return (
    <dialog ref={ref} className="w-3/6	h-3/6	">
      <div>
        <h2>Title Of a Book:</h2>
        <p>{title}</p>
      </div>
      <div>
        <h2>Author Of A Book:</h2>
        <p>{author}</p>
      </div>
      <div className="flex items-center text-2xl">
        <h2>Readers Rating:</h2>
        <p>{rating}</p>
      </div>
      <form method="dialog">
        <Button>Close</Button>
      </form>
    </dialog>
  );
});
export default bookResult;
