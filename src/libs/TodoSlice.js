import { createSlice } from "@reduxjs/toolkit";
import data from '../data/todolist.json'

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        data: data,
    },
    reducers: {
        addTodo: (state, action) => {
            const { task } = action.payload;
            state.data.unshift({
                id: state.data.length + 1,
                task: task,
                done: false,
            });
        },
        removeTodo: (state, action) => {
            const { id } = action.payload;
            const index = state.data.findIndex((item) => item.id === id);
            state.data.splice(index, 1);
        },
        editTodo: (state, action) => {
            const { id, task } = action.payload;
            const index = state.data.findIndex((item) => item.id === id);
            state.data[index].task = task;
        },
        swapDone: (state, action) => {
            const { id } = action.payload;
            const index = state.data.findIndex((item) => item.id === id);
            state.data[index].done = !state.data[index].done;
        }
    }
})

export const { addTodo, removeTodo, editTodo, swapDone } = todoSlice.actions

export default todoSlice.reducer