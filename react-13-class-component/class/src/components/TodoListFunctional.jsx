import React, { useState } from 'react'
import { useEffect } from 'react';

function TodoFunctional() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    useEffect(() => {
        console.log("CDM: Calling it from did mount")

        const timer = setTimeout(() => {
            setTodos(['Learn React', 'Read a book']);
        }, 1000);

        return () => {
            clearTimeout(timer)
            console.log("CDUM: Component is going  to unmount")
        }
    }, [])


    useEffect(() => {
        console.log("CDU: Calling it when there is an update")
    })

    useEffect(() => {
        console.log("The value of new todo has changed")
    }, [todos])

    const handleInputChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleAddTodo = () => {
        // setTodos({[...todos, newTodo]})
        setTodos((prev) => [...prev, newTodo])
        setNewTodo('')
    }

    console.log('Render: Rendering the to-do list.');

    return (
        <div>
            <h1>My To-Do List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>Add To-Do</button>
        </div>
    );
}

export default TodoFunctional