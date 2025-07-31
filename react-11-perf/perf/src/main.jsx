import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import LazyApp from './components/LazyApp.jsx'
import MemoApp from './components/MemoApp.jsx'
import Callback from './components/CallbackApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Callback/>
    </BrowserRouter>
  </StrictMode>,
)
