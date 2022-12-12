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
                const total = parseInt(qty) * parseFloat(item.price).toFixed(2)
                if(coffeAlreadyExists < 0){
                    draft.push({
                        id: cartItemId++,
                        productId: item.id,
                        price: parseFloat(item.price).toFixed(2),
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
            setTotalCart(newTotal.toFixed(2))
        }
    }

    function changeQty(id, qty, option){
        let item = findCoffeebyId(id)
        let newTotal = 0;
        if(item){
            const coffeAlreadyExists = cartItem.findIndex(
                (item) => item.productId === id
            )
            
            const newItem = produce(cartItem, (draft) => {
                const total = parseInt(qty) * parseFloat(item.price).toFixed(2)
                draft[coffeAlreadyExists].qty = qty
                draft[coffeAlreadyExists].total = total
                if(option == 'plus'){
                    newTotal = parseFloat(totalCart) + parseFloat(total)
                }else{
                    newTotal = parseFloat(totalCart) - parseFloat(total)
                }
            })

            setCartItem(newItem)
            setTotalCart(newTotal.toFixed(2))
        }
    }


    return (
        <CoffeContext.Provider 
            value={
                { 
                    addToCart, 
                    cartItem,
                    findCoffeebyId,
                    totalCart,
                    changeQty
                }
            }
        >
            { children }
        </CoffeContext.Provider>
    )
}