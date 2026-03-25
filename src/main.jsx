import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'   // ✅ THIS WAS MISSING
import './index.css'   // ✅ add this back

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)