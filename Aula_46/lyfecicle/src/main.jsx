import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LifeCycleFunctionComponent from './LyfeCicleFunctionComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifeCycleFunctionComponent />
  </StrictMode>,
)
