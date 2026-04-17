import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: []
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    clearTasks: (state) => {
      state.list = [];
    }
  }
});

export const { addTask, deleteTask, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;