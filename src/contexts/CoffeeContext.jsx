import { createContext, useState } from 'react'
import { coffees } from '../database/coffees';

export const CoffeeContext = createContext({});

let cartItemId = 1;

export function CoffeeContextProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);
    const [cart, setCart] = useState({
        total: 0,
        totalQty: 0
    }); 

    function findCoffeeById(id) {
        return coffees.find(coffee => {
            return coffee.id === id
        })
    }

    function findCoffeeItemById(id) {
        return cartItem.find(item => {
            return item.productId === id
        })
    }

    function addCoffeeToCart(id, qty) {
        let idCartItem = 0;
        let item = cartItem.length > 0 ? findCoffeeItemById(id) : null;

        if(item){
            idCartItem = item.id;
        }else{
            item = findCoffeeById(id);
            idCartItem = cartItemId++;
        }

        const total = qty * item.price;

        setCartItem([...cartItem, {
            id: idCartItem,
            productId: id,
            price: item.price,
            qty,
            total: total
        }])

        setCart({
            total: parseFloat(cart.total) + parseFloat(total),
            totalQty: parseInt(cart.totalQty) + parseInt(qty)
        })
        
        console.log('cart', cart)
    }

    function removeCoffeeToCart(id) {
        const findSelectedCoffee = coffees.find(coffee => {
            return coffee.id !== id
        })
        setCartItem(findSelectedCoffee)
    }

    return (
        <CoffeeContext.Provider 
        value={
            {
                addCoffeeToCart,
                removeCoffeeToCart,
                cart
            }
        }>
            {children}
        </CoffeeContext.Provider>
    )
}