import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { logger } from "redux-logger";
import calendarReducer from "./libs/PlannerSlice";
import diaryReducer from "./libs/DiarySlice";
import todoReducer from "./libs/TodoSlice";
import themeReducer from "./libs/ThemeSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  calendar: calendarReducer,
  diary: diaryReducer,
  todo: todoReducer,
  theme: themeReducer,
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