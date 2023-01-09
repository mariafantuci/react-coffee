import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { Buy } from '../../../components/Buy';
import { Image } from '../../../components/Image';
import { cartItemType, CoffeeContext } from '../../../Context/CoffeeContext';

interface CartItemProps {
    coffee: cartItemType
}

export function CartItem({ coffee }: CartItemProps){
    const { findCoffeebyId } = useContext(CoffeeContext)
    const product = findCoffeebyId(coffee.productId) 
    const total = coffee.total.toFixed(2)
    
    return (
        <div className="flex w-full pb-3 border-b-base-button border-b">
        <Image className="!w-[18%] mr-5" src={product?.img} alt="black coffee" />
            <div className="flex flex-col w-full gap-x-5">
                <h4 className="font-Roboto text-base-subtitle text-sm leading-5 mb-2">{product?.name}</h4>
                <div className="flex">
                    <Buy cartQty={coffee.qty} id={coffee.productId} showButton={false}/>
                    <button className="bg-base-button rounded-lg flex p-3 uppercase text-base-text text-xxs leading-5 items-center">
                        <Trash size={16} className="text-purple mr-2"/> 
                        Remover
                    </button>
                </div>
            </div>
            <span className="text-sm leading-5 font-bold font-Roboto text-base-text text-left">{total}</span>
        </div>
    )
}