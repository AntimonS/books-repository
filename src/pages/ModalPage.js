import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose}>Close</Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Successfully added a book</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Modal</Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
