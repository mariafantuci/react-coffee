import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { CoffeContext } from '../Context/CoffeContext';

export function Buy({ id, showButton }){
    const [qty, setQty] = useState(1)

    const { addToCart } = useContext(CoffeContext)

    function handleMinusQuantity(){
        if(qty >= 2){
            setQty((state) => {
                return state - 1
            })
        }
    }
    
    function handlePlusQuantity(){
        setQty((state) => {
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