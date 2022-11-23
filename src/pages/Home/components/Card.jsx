import { Buy } from './Buy'
import { Image } from './Image'

export function Card({coffee}) {
    console.log(coffee)
    return (
        <div className="box-border bg-base-card rounded-tl-md rounded-bl-large rounded-br-md rounded-tr-large flex justify-center flex-col w-full items-center pb-5 px-4">
            <Image className="w-32 h-32 -mt-9" src="src/assets/expresso-tradicional.png" alt="black coffee" />
            <div className="flex w-full gap-x-1 justify-center">
            {coffee.tags.map(tag => {
                return(
                    <span key={tag} className="text-yellow-dark bg-yellow-light py-1 px-2 rounded-full uppercase text-2xxs font-bold">{tag}</span>
                )
            })}
                
            </div>
            <h3 className="font-baloo font-bold text-lg mt-4 mb-2 leading-7">{coffee.name}</h3>
            <p className="mb-8 text-center">{coffee.description}</p>
            <div className="flex w-full items-center align-center content-center justify-center">
                <span className="text-base-text text-xs mr-1 ">R$:</span>
                <span className="font-baloo font-bold text-xl leading-8 text-base-text mr-3">{coffee.price}</span>
                <Buy/>
            </div>
        </div>
    )
}