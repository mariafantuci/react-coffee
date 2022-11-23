import { Routes, Route} from 'react-router-dom'

import { ManageCoffee } from './pages/ManageCoffee/Index'
import { Checkout } from './pages/Checkout/Index'
import { Home } from './pages/Home/Index'
import { OrderFinish } from './pages/OrderFinish/Index'

export function Router() {
  return (
    <Routes>
        <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orderFinished" element={<OrderFinish />} />
            <Route path="/adm/manage-coffee" element={<ManageCoffee />} />
        </Route>
    </Routes>
  )
}
