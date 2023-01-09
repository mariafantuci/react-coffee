import { Buy } from '../../../components/Buy'
import { Image } from '../../../components/Image'
import { coffeesType } from '../../../database/coffees'

interface coffeeProps {
    coffee: coffeesType
}

export function Card({ coffee }: coffeeProps) {
    return (
        <div className="box-border bg-base-card rounded-tl-md rounded-bl-large rounded-br-md rounded-tr-large flex justify-center flex-col w-full items-center pb-5 px-4 lg:px-5 xl:px-8 mb-10 lg:mb-12 relative">
            <div className="absolute opacity-0 top-0 left-0 bg-yellow-dark p-1 rounded text-base-card font-baloo font-bold message"></div>
            <Image className="w-32 h-32 -mt-9" src={coffee.img} alt="black coffee" />
            <div className="flex w-full justify-center gap-1">
                {
                    coffee.tags.map(tag => {
                        return(
                            <span key={tag} className="text-yellow-dark uppercase font-bold text-2xxs bg-yellow-light py-1 px-2 rounded-full">{tag}</span>
                        )
                    })
                }
            </div>
            <h3 className="font-baloo font-bold text-lg mt-4 mb-2">{coffee.name}</h3>
            <p className="mb-8 text-center text-base-label text-xs leading-4">{coffee.description}</p>
            <div className="flex w-full items-center align-center content-center justify-center">
                <span className="text-base-text text-xs mr-1">R$:</span>
                <span className="font-baloo font-bold text-xl text-base-text mr-5">{coffee.price}</span>
                <Buy cartQty={0} id={coffee.id } showButton={true} />
            </div>
        </div>
    )
}