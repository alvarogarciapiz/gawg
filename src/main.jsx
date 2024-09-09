import { StrictMode } from 'react'
import { Analytics } from "@vercel/analytics/react"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)