import { Routes, Route} from 'react-router-dom'
import { Cart } from './pages/Cart/Index'
import { Home } from './pages/Home/Index'

export function Router() {
  return (
    <Routes>
      <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}