import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import coffeImg from '../../../assets/Imagem-coffee.svg'

export function Banner(){
    return(
        <div className="px-4 md:px-8 xl:px-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-9 bg-banner-background py-10 lg:py-24">
            <div className="flex w-full flex-col">
                <h1 className="font-baloo text-3xl text-base-title">Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-9 gap-y-4 lg:gap-6 mt-7 lg:mt-20">
                    <div className="flex items-center gap-x-[22px]">
                        <div className="bg-yellow-dark rounded-full p-2.5 inline-block">
                            <ShoppingCartSimple size={16} className="text-background fill-background " /> 
                        </div>
                        <span>Compra simples e segura</span>
                    </div>
                    <div className="flex items-center gap-x-[22px]">
                        <div className="bg-base-text rounded-full p-2.5 inline-block">
                            <Package  size={16} className="text-background fill-background " /> 
                        </div>
                        <span>Embalagem mantém o café intacto</span>
                    </div>
                    <div className="flex items-center gap-x-[22px]">
                        <div className="bg-yellow rounded-full p-2.5 inline-block">
                            <Timer size={16} className="text-background fill-background " />  
                        </div>
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div className="flex items-center gap-x-[22px]">
                        <div className="bg-purple rounded-full p-2.5 inline-block">
                            <Coffee size={16} className="text-background fill-background " />
                        </div>
                        <span>O café chega fresquinho até você</span>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={coffeImg} alt="" />
            </div>
        </div>
    )
}