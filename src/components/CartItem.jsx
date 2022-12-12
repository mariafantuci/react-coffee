import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CoffeContext } from '../Context/CoffeContext';
import { Buy } from './Buy';
import { Image } from './Image';


export function CartItem({ coffee }){
    const { findCoffeebyId } = useContext(CoffeContext)
    const product = findCoffeebyId(coffee.productId)
    return (
        <div className="flex w-full pb-3 border-b-base-button border-b">
        <Image className="!w-[18%] mr-5" src={product.img} alt="black coffee" />
            <div className="flex flex-col w-full gap-x-5">
                <h4 className="font-Roboto text-base-subtitle text-sm leading-5 mb-2">{product.name}</h4>
                <div className="flex">
                    <Buy cartQty={coffee.qty} showButton={false}/>
                    <button className="bg-base-button rounded-lg flex p-3 uppercase text-base-text text-xxs leading-5">
                        <Trash size={16} className="text-purple mr-2"/> 
                        Remover
                    </button>
                </div>
            </div>
            <span className="text-sm leading-5 font-bold font-Roboto text-base-text text-left">{coffee.price}</span>
        </div>
    )
}