import React, { useState } from "react";

const Modal = ({ id, closeModal, updateData }) => {
  const [editTextValue, setEditTextValue] = useState("");

  const editTask = async () => {
    await fetch(`${import.meta.env.VITE_DATABASE_URL}editTask`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        IdTask: id,
        EditText: editTextValue,
      },
    });
    closeModal();
    updateData();
  };
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-md">
      <div className=" flex h-1/3 w-11/12 flex-col rounded-md border-2 border-white bg-black sm:h-64 sm:w-96">
        <h2 className="border-b-2 border-white text-center text-xl">
          Edit task
        </h2>
        <textarea
          className="h-full resize-none bg-[#171819] px-2 text-white outline-none "
          value={editTextValue}
          onChange={(e) => setEditTextValue(e.target.value)}
        />
        <div className="flex border-t-2 border-white">
          <button onClick={editTask} className="h-full w-full">
            Edit
          </button>
          <button onClick={closeModal} className="h-full w-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
