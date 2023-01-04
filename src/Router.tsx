import { Routes, Route} from 'react-router-dom'

import { Header } from './layouts/Header'
import { Checkout } from './pages/Checkout/index'
import { Home } from './pages/Home/index'
import { Success } from './pages/Success/index'

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Home />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/success" element={<Success />}/>
            </Route>
        </Routes>
    )
}