import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CoffeeContext } from '../Context/CoffeeContext';

export function Header () {
    const { cartItem } = useContext(CoffeeContext);
    let total = 0
    cartItem.forEach((item) => {
        total += item.qty
    })
    
    return (
        <header className="flex w-full bg-background py-10 px-10 lg:px-36 justify-between items-center">
            <NavLink to="/" title="Home">
                <img src={logo} alt="coffee purple" />
            </NavLink>
            <div className="flex items-center gap-3">
                <div className="flex items-center bg-purple-light  rounded-lg p-2 gap-1 hover:text-purple text-purple-dark">
                    <MapPin className="map-icon hover:fill-purple fill-purple-dark" size={32} />
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