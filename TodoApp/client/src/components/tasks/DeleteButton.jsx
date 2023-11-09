import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";

const DeleteButton = ({ id }) => {
  const deleteTask = async () => {
    const res = await fetch(`${import.meta.env.VITE_DATABASE_URL}deleteTask`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", IdTask: id },
    });
  };

  return <BiTrash size={25} onClick={deleteTask} />;
};

export default DeleteButton;
