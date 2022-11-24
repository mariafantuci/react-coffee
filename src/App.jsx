import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { Router } from './Router'

import './styles/theme.css'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider >
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}