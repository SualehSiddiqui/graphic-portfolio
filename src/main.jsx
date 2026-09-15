import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AntiScreenshot from './components/AntiScreenshot/index.jsx'
import RestrictUser from './RestrictUser/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RestrictUser />
    <AntiScreenshot />
    <App />
  </StrictMode>,
)
