import { createSlice, current } from "@reduxjs/toolkit";
const tasksArray = [
  { id: 1, task: "Study 2 hours every day", completed: false },
  { id: 2, task: "Sleep 8 hours every day  ", completed: false },
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
     
      if(!( !action.payload.task || /^\s*$/.test(action.payload.task))){
         // state.value .push(action.payload);
      state.value = [...state.value, action.payload];
      }
     console.log("Boş değer girildi....")
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((element) => element.id != action.payload)
    },
    isCompleted: (state, action) => {
      const editArr = state.value.map(obj => {
        if (obj.id === action.payload[0]) {
          return {...obj, completed: action.payload[1]};
        }
        return obj;
      });
      state.value =editArr;
    },
  },
});
export const { addTask, deleteTask,isCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;
