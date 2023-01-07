import { createContext, ReactNode, useState } from 'react';
import { produce } from 'immer';
import { coffees } from '../database/coffees';

export interface coffeeInterface {
    tags: [
        tag: string
        ] ,
    img: string,
    name: string,
    id: number,
    description: string,
    price: number,
}

interface cartItemType{
    id: number,
    productId: number,
    price: number,
    qty: number,
    total: number
}

interface CoffeeContextType{
    cartItem: cartItemType[],
    totalCart: number
}


export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
    children: ReactNode;
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps){
    const [cartItem, setCartItem] = useState<cartItemType[]>([])
    const [totalCart, setTotalCart] = useState(0)
    
    return (
        <CoffeeContext.Provider 
            value={
                { 
                    cartItem,
                    totalCart
                }
            }
        >
            { children }
        </CoffeeContext.Provider>
    )
}