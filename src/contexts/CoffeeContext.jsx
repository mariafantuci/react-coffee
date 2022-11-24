import { createContext, useState } from 'react'
import { coffees } from '../database/coffees';

export const CoffeeContext = createContext({});

export function CoffeeContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addCoffeeToCart(id) {
        const findSelectedCoffee = coffees.find(coffee => {
            return coffee.id === id
        })
        setCart(...cart, findSelectedCoffee)
    }
    
    function removeCoffeeToCart(id) {
        const findSelectedCoffee = coffees.find(coffee => {
            return coffee.id !== id
        })
        setCart(findSelectedCoffee)
    }

    function cartValues() {
        return cart;
    }

    return (
        <CoffeeContext.Provider 
        value={
            {
                addCoffeeToCart,
                removeCoffeeToCart,
                cartValues
            }
        }>
            {children}
        </CoffeeContext.Provider>
    )
}