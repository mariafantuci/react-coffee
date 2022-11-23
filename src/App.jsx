import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import './styles/theme.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}