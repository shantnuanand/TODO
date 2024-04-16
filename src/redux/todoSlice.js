import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("todos")) || [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload.id);
      state.splice(0, state.length, ...newState);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
