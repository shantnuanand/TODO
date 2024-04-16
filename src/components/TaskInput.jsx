import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TaskInput = () => {
  const dispatch = useDispatch(); //to dispatch the data to the store
  const [value, setValue] = useState(""); // to obtain the data from input
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch( //dispatching the title to the action and storing on the redux store
      addTodo({
        title: value,
      })
    );
    // console.log(value);
    setValue(""); //setting the input value again to null
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-600 focus:outline-none text-lg block p-2.5 rounded-sm w-full"
        type="text"
        value={value}
        placeholder="Add your new todo!"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-sm text-2xl">
        <i className="ri-add-line"></i>
      </button>
    </form>
  );
};

export default TaskInput;
