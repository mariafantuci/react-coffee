import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './styles/theme.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

