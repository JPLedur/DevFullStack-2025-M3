import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Produto from './Produto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produto />
  </StrictMode>,
)
