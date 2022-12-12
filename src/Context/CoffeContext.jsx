import { produce } from 'immer';
import { createContext, useState } from 'react'
import { coffees } from '../database/coffees';

export const CoffeContext = createContext({})

let cartItemId = 1;

export function CoffeContextProvider({ children }){
    const [cartItem, setCartItem] = useState([])
    const [totalCart, setTotalCart] = useState(0)

    function findCoffeebyId(id){
        const coffeeObject = coffees.find(coffee => {
            return coffee.id === id
        })
        if(coffeeObject){
            return coffeeObject
        }else{
            return null
        }
    }

    function addToCart(id, qty){
        let item = findCoffeebyId(id)
        let newTotal = 0;
        if(item){
            const coffeAlreadyExists = cartItem.findIndex(
                (item) => item.productId === id
            )
            const newItem = produce(cartItem, (draft) => {
                const total = parseInt(qty) * parseFloat(item.price)
                if(coffeAlreadyExists < 0){
                    draft.push({
                        id: cartItemId++,
                        productId: item.id,
                        price: parseFloat(item.price),
                        qty,
                        total
                    })
                    
                }else{
                    draft[coffeAlreadyExists].qty += qty
                    draft[coffeAlreadyExists].total += total
                }

                newTotal += parseFloat(totalCart) + parseFloat(total)
            })
            setCartItem(newItem)
            setTotalCart(newTotal)
        }
    }


    return (
        <CoffeContext.Provider 
            value={
                { 
                    addToCart, 
                    cartItem,
                    findCoffeebyId,
                    totalCart
                }
            }
        >
            { children }
        </CoffeContext.Provider>
    )
}