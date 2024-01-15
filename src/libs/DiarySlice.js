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
        },
        editDiary: (state, action) => {
            const { date, title, emotion, content } = action.payload;
            const index = state.data.findIndex((item) => item.date === date);
            state.data[index].title = title;
            state.data[index].emotion = emotion;
            state.data[index].content = content;
        }
    }
})

export const { addDiary, editDiary } = diarySlice.actions

export default diarySlice.reducer