import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FecthUser from './components/FecthUser'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FecthUser />
  </StrictMode>,
)
