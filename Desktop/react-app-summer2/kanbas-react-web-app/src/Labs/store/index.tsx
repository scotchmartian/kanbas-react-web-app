import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/HelloRedux/helloReducer";
// import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/AddRedux/addReducer";
import todosReducer from "../Lab4/todos/todosReducer";
import counterReducer from "../Lab4/counterRedux/counterReducer";
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    // counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;