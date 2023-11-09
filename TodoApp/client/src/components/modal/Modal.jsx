import React, { useState } from "react";

const Modal = ({ id, closeModal }) => {
  const [editTextValue, setEditTextValue] = useState("");

  const editTask = async () => {
    console.log(id);
    const res = await fetch(`${import.meta.env.VITE_DATABASE_URL}editTask`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        IdTask: id,
        EditText: editTextValue,
      },
    });
      closeModal();
  };
  return (
    <div className=" absolute left-2/4 top-2/4 z-10 flex h-64 w-96 -translate-x-2/4 -translate-y-2/4 flex-col border-2 border-white bg-black">
      <h2 className="text-center">Edit task</h2>
      <input
        type="text"
        className="h-full text-start text-black"
        value={editTextValue}
        onChange={(e) => setEditTextValue(e.target.value)}
      />
      <div className="flex justify-around">
        <button onClick={editTask}>Edit</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
