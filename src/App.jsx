import { BrowserRouter } from 'react-router-dom'
import { CoffeContextProvider } from './Context/CoffeContext'
import { Router } from './Router'

import './styles/theme.css'

export function App() {
  return (
    <BrowserRouter>
      <CoffeContextProvider>
        <Router />
      </CoffeContextProvider>
    </BrowserRouter>
  )
}