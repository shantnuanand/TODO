import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import Total from "../components/Total";

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
        <div className="flex items-center justify-between px-2">
          <Total/>
          <button className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-sm">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
