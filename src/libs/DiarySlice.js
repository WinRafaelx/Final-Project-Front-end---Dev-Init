import { createSlice } from "@reduxjs/toolkit";
import data from '../data/diary.json'

const diarySlice = createSlice({
    name: "diary",
    initialState: {
        data: data,
    },
    reducers: {
        addDiary: (state, action) => {
            const { date, title, emotion, content } = action.payload;
            state.data.push({
                date: date,
                title: title,
                emotion: emotion,
                content: content,
            });
        }
    }
})

export const { addDiary } = diarySlice.actions

export default diarySlice.reducer