import { createContext, ReactNode, useState } from 'react';
import { produce } from 'immer';
import { coffees, coffeesType } from '../database/coffees';

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

export interface cartItemType{
    id: number,
    productId: number,
    price: number,
    qty: number,
    total: number
}

interface CoffeeContextType{
    cartItem: cartItemType[],
    totalCart: number,
    addToCart: (id: number, qty: number) => void,
    findCoffeebyId: (id: number) => coffeesType | null,
    changeCartItemQty: (id: number, qty: number, option: "plus" | "minus") => void,
    deleteCartItem: (id: number) => void,
    completedForm: boolean, 
    setCompletedForm: (value: boolean) => void,
}


export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
    children: ReactNode;
}

let cartItemId = 1;

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps){
    const [cartItem, setCartItem] = useState<cartItemType[]>([])
    const [totalCart, setTotalCart] = useState(0)
    const [completedForm, setCompletedForm] = useState(false)

    function findCoffeebyId(id: number){
        const coffeeObject = coffees.find(coffee => {
            return coffee.id === id
        })
        if(coffeeObject){
            return coffeeObject
        }else{
            return null
        }
    }

    function addToCart(id: number, qty: number){
        let item = findCoffeebyId(id)
        let newTotal = 0;
        const messageElement = document.querySelectorAll('.message')
        let message = 'Quantidade alterada com sucesso';

        if(item){
            const coffeAlreadyExists = cartItem.findIndex(
                (item) => item.productId === id
            )
            const newItem = produce(cartItem, (draft) => {
                const total = qty * item?.price!
                if(coffeAlreadyExists < 0){
                    draft.push({
                        id: cartItemId++,
                        productId: item?.id!,
                        price: item?.price!,
                        qty,
                        total
                    })
                    message = 'Adicionado ao carrinho';
                }else{
                    draft[coffeAlreadyExists].qty += qty
                    draft[coffeAlreadyExists].total += total
                }

                newTotal += totalCart + total
            })

            enableMessageOnCardItem(messageElement[id - 1], message);

            setCartItem(newItem)
            setTotalCart(newTotal)

        }
    }
    
    function enableMessageOnCardItem(element: any, message: string){
        element.innerHTML = message
        element.classList.add('fade-in')
        element.classList.remove('fade-out')
        setTimeout(() => {
            element.classList.add('fade-out')
            element.classList.remove('fade-in')
        }, 2000)
    }

    function deleteCartItem(id: number) {
        let removeItem = 0;
        const coffeeWithoutDeletedOne = cartItem.filter(item => {
            if(item.id == id){
                removeItem = item.total
            }
            return item.id !== id;
        })
        console.log('coffeeWithoutDeletedOne',coffeeWithoutDeletedOne)
        setCartItem(coffeeWithoutDeletedOne)
        setTotalCart(totalCart - removeItem)
    }

    function changeCartItemQty(id: number, qty: number, option: "plus" | "minus"){
        let newTotal = 0;
        const updatedCartItem = cartItem.map(item => {
            let total = item.price * item.qty
            if(item.productId === id){
                total = item.price * qty
                newTotal += total
                return {
                    ...item,
                    qty,
                    total: total
                }
            }
            newTotal += total
            return {...item}
        })
        setCartItem(updatedCartItem)
        setTotalCart(newTotal)
    }

    return (
        <CoffeeContext.Provider 
            value={
                { 
                    cartItem,
                    totalCart,
                    findCoffeebyId,
                    changeCartItemQty,
                    addToCart,
                    deleteCartItem,
                    completedForm, 
                    setCompletedForm,
                }
            }
        >
            { children }
        </CoffeeContext.Provider>
    )
}