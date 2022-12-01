import {Routes, Route} from 'react-router-dom'
import { Checkout } from './pages/Checkout/Index'
import { Home } from './pages/Home/Index'

export function Router(){
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home />}/>
                <Route path="/checkout" element={<Checkout />}/>
            </Route>
        </Routes>
    )
}