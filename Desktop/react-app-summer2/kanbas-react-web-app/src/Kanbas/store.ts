import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
// import counterReducer from "../Labs/Lab4/ReduxExamples/CounterRedux/counterReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
  },
});
export default store;