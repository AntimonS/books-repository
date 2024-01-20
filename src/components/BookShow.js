import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const { handleDeleteBookById } = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    handleDeleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="row g-0">
          <div class="card">
            <div class="col-md-4">
              <img
                src={`http://picsum.photos/seed/${book.id}/300/200`}
                class="img-fluid img-thumbnail"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body bg">
                <h5 class="card-title">{book.title}</h5>
                <p class="card-text">{book.author}</p>
              </div>

              <small class="text-muted ">Pages:{book.pages}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div class="container   mt-3 ">
      {content}
      <button class="btn btn-success " onClick={handleEditClick}>
        Edit
      </button>
      <button class="btn btn-danger " onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

export default BookShow;
