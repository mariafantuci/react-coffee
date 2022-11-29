import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../assets/hero-coffee.svg'

export function Hero(){
    return(
        <div className="bg-repeat bg-hero-bg pt-10 lg:pt-[94px] px-10 lg:px-36 flex flex-col md:grid md:grid-cols-2 gap-x-14 mb-5 lg:mb-8">
            <div className="">
                <h1 className="text-base-title font-baloo text-3xl leading-[48px] font-extrabold mb-4">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="font-Roboto text-lg leading-[26px] text-base-subtitle">Encontre o café perfeito para qualquer hora do dia</p>
                <div className="mt-6 lg:mt-16 flex flex-col gap-y-5 md:grid md:grid-cols-2">
                    <div className="flex items-center gap-x-3">
                        <div className="bg-yellow-dark rounded-full p-2.5">
                            <ShoppingCart className="text-white fill-white" size={16}/>
                        </div>
                        <span className="text-roboto text-sm text-base-text leading-5">Compra simples e segura</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="bg-base-text rounded-full p-2.5">
                            <Package className="text-white fill-white" size={16}/>
                        </div>
                        <span className="text-roboto text-sm text-base-text leading-5">Embalagem mantém o café intacto</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="bg-yellow rounded-full p-2.5">
                            <Timer className="text-white fill-white" size={16}/>
                        </div>
                        <span className="text-roboto text-sm text-base-text leading-5">Entrega rápida e rastreada</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="bg-purple rounded-full p-2.5">
                            <Coffee className="text-white fill-white" size={16}/>
                        </div>
                        <span className="text-roboto text-sm text-base-text leading-5">O café chega fresquinho até você</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full xl:w-9/12 xl:ml-auto">
                <img src={coffee} alt="coffee" />
            </div>
        </div>
    )
}