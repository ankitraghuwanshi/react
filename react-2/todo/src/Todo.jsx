import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'

function Todo() {
    const [todoList,setTodoList]=useState([])
    
    return (
        <>
            <InputTodo setTodoList={setTodoList}/>
            <TodoList todoList={todoList}/>
        </>
    )
}

export default Todo