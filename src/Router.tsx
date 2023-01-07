import { Routes, Route} from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/Index'
import { Checkout } from './pages/Checkout/Index'
import { Home } from './pages/Home/Index'
import { Success } from './pages/Success/Index'

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/success" element={<Success />}/>
            </Route>
        </Routes>
    )
}