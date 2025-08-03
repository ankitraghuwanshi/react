import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppClass from './components/AppClass.jsx'
import Counter from './components/Counter.jsx'
import TodoList from './components/TodoList.jsx'
import TodoListFunctional from './components/TodoListFunctional.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppClass text1="hello" text2="world"/> */}
    <TodoListFunctional/>
  </StrictMode>,
)
