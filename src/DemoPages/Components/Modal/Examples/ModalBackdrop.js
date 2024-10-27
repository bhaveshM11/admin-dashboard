import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

const ModalBackdrop = (props) => {
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);

  const toggle = () => {
    setModal(!modal);
  };

  const changeBackdrop = (e) => {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  return (
    <span className="d-inline-block mb-2 me-2">
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Input
            bsSize="sm"
            className="me-1"
            type="select"
            name="backdrop"
            id="backdrop"
            onChange={changeBackdrop}
          >
            <option value="true">true</option>
            <option value="false">false</option>
            <option value="static">"static"</option>
          </Input>
        </FormGroup>
        <Button color="primary" onClick={toggle}>
          Modal Backdrop
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={props.className}
        backdrop={backdrop}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default ModalBackdrop;
