import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRef from './AppRef.jsx'
import AppRef2 from './AppRef2.jsx'
import Counter from './Counter.jsx'
import Carousel from './Carousel.jsx'
import ModalApp from './ModalApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalApp />
  </StrictMode>
)
