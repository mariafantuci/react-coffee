import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffeeContext } from '../Context/CoffeeContext';

interface BuyProps {
    id: number,
    showButton: boolean, 
    cartQty: number,
}

export function Buy({ id, showButton, cartQty}: BuyProps){

    let initial = 1
    if(cartQty != 0 ){
        initial = cartQty
    }
    const [qty, setQty] = useState(initial)
    const { addToCart, changeCartItemQty } = useContext(CoffeeContext)

    function handleMinusQuantity(){
        if(qty >= 2){
            setQty((state) => {
                if(!showButton ) changeCartItemQty(id, (state - 1), 'minus')
                return state - 1
            })
        }
    }
    
    function handlePlusQuantity(){
        setQty((state) => {
            if(!showButton ) changeCartItemQty(id, (state + 1), 'plus')
            return state + 1
        })
    }

    function handleAddToCart(){
        addToCart(id, qty)
        setQty(1)
    }
    
    return(
        <div className="flex items-center justify-center">
            <div className="mr-2 flex items-center bg-base-button rounded-lg p-2">
                <button onClick={handleMinusQuantity}>
                    <Minus  className="text-purple hover:text-purple-dark" size={16} />
                </button>
                <input min="1" value={qty} max="9" className="w-9 p-0 text-center bg-base-button text-base-title text-sm" type="number" />
                <button onClick={handlePlusQuantity}>
                    <Plus className="text-purple hover:text-purple-dark" size={16} />
                </button>
            </div>
            {showButton && 
                <button className="btn-cart" onClick={handleAddToCart}>
                    <ShoppingCartSimple className="fill-base-card text-background" size={22} />
                </button>
            }
        </div>
    )
}