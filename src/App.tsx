import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from './Context/CoffeeContext'
import { Router } from './Router'
import './styles/theme.css'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}

