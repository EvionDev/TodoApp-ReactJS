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
    <div className=" absolute left-2/4 top-2/4 z-10 flex h-1/3 w-11/12  -translate-x-2/4 -translate-y-2/4 flex-col rounded-md border-2 border-white bg-black sm:h-64 sm:w-96">
      <h2 className="border-b-2 border-white text-center">Edit task</h2>
      <textarea
        className="h-full resize-none bg-[#171819] px-2 text-white outline-none "
        value={editTextValue}
        onChange={(e) => setEditTextValue(e.target.value)}
      />
      <div className="flex justify-around border-t-2 border-white">
        <button onClick={editTask}>Edit</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
