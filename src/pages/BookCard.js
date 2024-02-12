import { forwardRef } from "react";
import Button from "../components/Button";

const bookResult = forwardRef(function BookCard(
  { title, author, rating },
  ref
) {
  const cssCardStyle = "flex items-center text-2xl m-4 space-x-4";

  let dialogContent = (
    <div>
      <div className={cssCardStyle}>
        <h2>Title Of A Book:</h2>
        <p>{title}</p>
      </div>
      <div className={cssCardStyle}>
        <h2>Author Of A Book:</h2>
        <p>{author}</p>
      </div>
      <div className={cssCardStyle}>
        <h2>Readers Rating:</h2>
        <p>{rating}</p>
      </div>
    </div>
  );

  if (!(title || author || rating)) {
    dialogContent = (
      <div className="grid justify-items-center">
        <strong>
          <h1>Sorry,book not found!</h1>
        </strong>
      </div>
    );
  }

  return (
    <dialog ref={ref} className="w-3/6 h-2/6 ">
      {dialogContent}
      <form method="dialog">
        <div className="absolute bottom-0 right-0">
          <Button className="py-1">
            <b>X</b>
          </Button>
        </div>
      </form>
    </dialog>
  );
});
export default bookResult;
