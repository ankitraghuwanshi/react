import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        currentTodoValue: "",
        todoList: ['Todo 1', 'Todo 2']
    },
    reducers: {
        changeTodoValue: (state, { payload }) => {

            state.currentTodoValue = payload
            // state.currentTodoValue = descObj.payload
        },
        addTodoItem: (state) => {
            console.log(state)
            // const newArray = [...state.todoList, state.currentTodoValue]
            state.todoList.push(state.currentTodoValue)
            state.currentTodoValue = ""
        }
    }
})

export default todoSlice;