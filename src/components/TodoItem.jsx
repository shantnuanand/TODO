import React, { useState } from "react";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleCompleted = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div
        key={id}
        className="flex items-center gap-2 cursor-pointer"
        onClick={openModal}
      >
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          checked={completed}
          onChange={handleCompleted}
          className="w-5 h-5 rounded"
        />
        <div className="bg-gray-300 py-2 px-4 text-lg rounded-sm w-full text-gray-800">
          {title.slice(0, 30)}...
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-500 py-2 px-4 rounded-sm text-white text-lg"
        >
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-80">
          <div className="h-auto w-[700px] bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Todo Details</h2>
            <p>{title}</p>

            <button
              onClick={closeModal}
              className="bg-purple-600 hover:bg-purple-800 text-white mt-4 py-2 px-4 rounded-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
