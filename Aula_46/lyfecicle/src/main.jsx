import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FindingCEP from './FindingCEP.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FindingCEP cep="95098-320"/>
  </StrictMode>,
)
