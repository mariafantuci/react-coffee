import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header () {
    return (
        <header className="flex w-full bg-background py-10 px-10 lg:px-36 justify-between items-center">
            <img src={logo} alt="coffee purple" />
            <div className="flex items-center gap-3">
                <div className="flex items-center bg-purple-light text-purple rounded-lg p-2 gap-1">
                    <MapPin className="fill-purple" size={32} />
                    Prudente, SP
                </div>
                <div className="btn-cart-empty">
                    <ShoppingCart className="icon-cart" size={32} />
                </div>    
            </div>
        </header>
    )
}