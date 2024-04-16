import React from "react";
import TaskInput from "../components/TaskInput"; //component for adding a new task.
import TaskList from "../components/TaskList"; //component for displaying the list of tasks.
import Total from "../components/Total"; //component for displaying the total nos. of task completed

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-400 to-blue-500 h-screen flex items-center justify-center">
      <div className="h-auto w-[500px] bg-white p-5 flex flex-col gap-5 rounded-sm shadow-2xl">
        <div className="">
          <h1 className="text-slate-700 text-4xl font-bold">Todo App</h1>
        </div>
        <TaskInput />
        <div className="flex flex-col gap-2">
          <TaskList />
        </div>
        <div className="flex items-center justify-center px-2">
          <Total />
        </div>
      </div>
    </div>
  );
};

export default Home;
