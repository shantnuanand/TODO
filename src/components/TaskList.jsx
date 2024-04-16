import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const todos = useSelector((state) => state.todos); //fetching the data of todos array from the store

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TaskList;
