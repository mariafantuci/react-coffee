import { createContext, useState } from 'react'
import { coffees } from '../database/coffees';

export const CoffeContext = createContext({})

let cartItemId = 1;

export function CoffeContextProvider({ children }){
    const [cartItem, setCartItem] = useState([]);
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

    function findCoffeeItembyId(id){
        const coffeeObject = cartItem.find(item => {
            return item.id === id
        })
        if(coffeeObject){
            return coffeeObject
        }else{
            return null
        }
    }

    function addToCart(id, qty){
        let item = findCoffeebyId(id)
        if(item){
            // if(findCoffeeItembyId(id)){
            //     cartItem.map(item => {
            //         if(item.id == id){
            //             const total = parseInt(qty) * parseFloat(item.price)
            //             return {
            //                 ...item,
            //                 qty: item.qty + qty,
            //                 total
            //             }
            //         }
            //     })
            // }else{

                const total = parseInt(qty) * parseFloat(item.price)
                setCartItem([...cartItem, {
                    id: cartItemId++,
                    productId: item.id,
                    price: parseFloat(item.price),
                    qty,
                    total
                }])
            //}
        }
    }

    return (
        <CoffeContext.Provider 
            value={
                { 
                    addToCart, 
                    cartItem
                }
            }
        >
            { children }
        </CoffeContext.Provider>
    )
}