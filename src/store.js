import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { logger } from "redux-logger";
import calendarReducer from "./libs/PlannerSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  calendar: calendarReducer,
});

const middleware = (getDefaultMiddleware) => {
  return import.meta.env.MODE !== "production"
    ? getDefaultMiddleware().concat(logger)
    : getDefaultMiddleware();
};

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: import.meta.env.MODE !== "production",
});

export const useAppDispatch = () => useDispatch();

export default store;