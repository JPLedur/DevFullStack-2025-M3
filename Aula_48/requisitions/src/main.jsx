import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AxiosPost from './components/AxiosPost'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AxiosPost />
  </StrictMode>,
)
