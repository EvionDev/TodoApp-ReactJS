import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Modal from "../modal/Modal";

const EditButton = ({ id, updateData }) => {
  const [handleModal, setHandleModal] = useState(false);

  return (
    <>
      {handleModal && (
        <Modal
          closeModal={() => setHandleModal(false)}
          id={id}
          updateData={updateData}
        />
      )}
      <BiEdit
        size={25}
        onClick={() => {
          setHandleModal(true);
        }}
      />
    </>
  );
};

export default EditButton;
