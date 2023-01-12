import { FormEvent, useContext } from 'react'
import { CoffeeContext } from '../../../Context/CoffeeContext'

export function Total(){
    const { totalCart } = useContext(CoffeeContext)
    const delivery = 3.50
    const total = delivery + totalCart
    
    const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:form-data-1.0.0'
    )
    function handleOnSubmit(event: FormEvent){
        event.preventDefault();
        if(storedStateAsJson){
            window.location.href = window.location.origin + '/success'
        }
    }

    return (
        <form className="mb-10" onSubmit={handleOnSubmit}>
            <div className="my-6 grid grid-cols-2">
                <div className="flex flex-col gap-3">
                    <p className="text-xs leading-4 text-base-text">Total de itens</p>
                    <p className="text-xs leading-4 text-base-text">Entrega</p>
                    <h4 className="font-Roboto font-bold text-lg leading-7 text-base-subtitle">Total</h4>
                </div>
                <div className="flex flex-col gap-3 w-full items-end">
                    <p className="text-xs leading-4 text-base-text">R$ {totalCart.toFixed(2)}</p>
                    <p className="text-xs leading-4 text-base-text">R$ {delivery}</p>
                    <h4 className="font-Roboto font-bold text-lg leading-7 text-base-subtitle">R$ {total.toFixed(2)}</h4>
                </div>
            </div>
            <button disabled={!storedStateAsJson} className="w-full rounded-lg flex items-center justify-center py-3 uppercase text-white bg-yellow-dark text-xs font-Roboto bold">Confirmar pedido</button>
        </form>
    )
}