import { useState } from "react";
import UseBooks from "../hooks/use-books";
import Button from "./Button";
import Input from "./Input";
import Form from "./Form";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(false);

  return (
    <div className=" flex justify-center ">
      <Form>
        <Input label="Title" />
        <Input label="Author" />
        <Input type="select" label="Rating" />
        <Button>Save</Button>
        <Button onClick={handleClick}>Cancel</Button>
      </Form>
    </div>
  );
}
export default Modal;
