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

/*
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
   
    <div class="carousel-item" data-bs-interval="2000">
      <img src="http://picsum.photos/300/200" class="d-block w-100" alt="...">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="row g-0">
          <div class="card">
           
            <div class="col-md-8">
              <div class="card-body bg">
                <h5 class="card-title">{book.title}</h5>
                <p class="card-text">{book.author}</p>
              </div>
              
              <small class="text-muted">Pages:{book.pages}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{book.title}</h5>
          <p class="card-text">{book.author}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Pages:{book.pages}</small>
        </div>
      </div>
    </div>


let content = (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="row g-0">
          <div class="card">
            <div class="col-md-4">
              <img
                src="http://picsum.photos/300/200"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body bg">
                <h5 class="card-title">{book.title}</h5>
                <p class="card-text">{book.author}</p>
              </div>
              
              <small class="text-muted">Pages:{book.pages}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


*/
