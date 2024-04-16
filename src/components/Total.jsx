import React from "react";
import { useSelector } from "react-redux";

//track the record of total todos completed
const Total = () => {
    const total = useSelector((state)=>state.todos.filter((todo)=>todo.completed === false))
  return <h1 className="font-bold">You have {total.length} pending tasks</h1>;
};

export default Total;
