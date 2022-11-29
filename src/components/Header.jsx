import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'
import { NavLink } from 'react-router-dom';

export function Header () {
    const { cart } = useContext(CoffeeContext);
    console.log('cart', cart)
    return (
        <header className="flex w-full bg-background py-10 px-10 lg:px-36 justify-between items-center">
            <img src={logo} alt="coffee purple" />
            <div className="flex items-center gap-3">
                <div className="flex items-center bg-purple-light text-purple rounded-lg p-2 gap-1">
                    <MapPin className="fill-purple" size={22} />
                    Prudente, SP
                </div>
                <div className="btn-cart-header relative">
                    <NavLink to="/cart" title="Carrinho">
                        <ShoppingCart color="#C47F17" fill="#C47F17" size={22} />
                        <span data-value={cart.totalQty} className={cart.totalQty > 0 ? 'cart-qty': 'hidden'}>{cart.totalQty}</span>
                    </NavLink>
                </div>    
            </div>
        </header>
    )
}