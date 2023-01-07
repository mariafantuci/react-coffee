import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
// import { CoffeContext } from '../Context/CoffeContext'
import { NavLink } from 'react-router-dom';

export function Header () {
    let total = 0
    return (
        <header className="flex w-full bg-background py-10 px-10 lg:px-36 justify-between items-center">
            <NavLink to="/" title="Home">
                <img src={logo} alt="coffee purple" />
            </NavLink>
            <div className="flex items-center gap-3">
                <div className="flex items-center bg-purple-light text-purple rounded-lg p-2 gap-1">
                    <MapPin className="fill-purple" size={32} />
                    Prudente, SP
                </div>
                <div className="btn-cart-empty relative">
                    <NavLink to={total != 0 ? "/checkout" : '' } title="Checkout">
                        <ShoppingCart className="icon-cart" size={32} />
                        <span className={total == 0 ? 'hidden' : 'cartQty'}>{total}</span>
                    </NavLink>
                </div>    
            </div>
        </header>
    )
}