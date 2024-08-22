import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Progress } from './components/Progress.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Progress/> */}
  </StrictMode>,
)
