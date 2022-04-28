import { createSlice, current } from "@reduxjs/toolkit";
const tasksArray = [
  { id: 1, task: "Study 2 hours every day", completed: false },
  { id: 2, task: "Sleep 8 hours every day  ", completed: true },
  { id: 3, task: "Learn react", completed: false },
]
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: tasksArray
  },
  reducers: {

    addTask: (state, action) => {
      // console.log(action)
      state.value = [...state.value, action.payload];
      // state.value .push(action.payload);
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((element) => element.id != action.payload)
    },
  },
});
export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
