import { createSlice } from "@reduxjs/toolkit";

const allThemes = ["white", "emerald", "cyan"];

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    data: allThemes,
    now: 0,
    size: allThemes.length,
  },
  reducers: {
    nextTheme: (state) => {
      state.now = (state.now + 1) % state.size;
    },
    prevTheme: (state) => {
      state.now = (state.now - 1 + state.size) % state.size;
    },
  }
});

export const { nextTheme, prevTheme } = themeSlice.actions;

export default themeSlice.reducer;
