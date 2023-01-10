import illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, ShoppingCart, Timer } from 'phosphor-react'
interface InformationType {
    district: string;
    cep: string;
    complement: string;
    city: string;
    street: string;
    uf: string;
    number: string;
    payment: string;
}

export function Success(){
    const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:form-data-1.0.0'
    )
    if(storedStateAsJson){
        const information: InformationType = JSON.parse(storedStateAsJson)
    }else{
        window.location.href = window.location.origin + '/'
    }
    console.log('information',information)
    return(
        <main className="grid grid-cols-1 lg:gap-x-10 xl:gap-x-24 lg:grid-cols-2 bg-background py-10 px-10 lg:px-36">
            <div className="w-full">
                <h1 className="font-baloo text-xl leading-6 lg:text-2xl font-extrabold mb-1 text-yellow-dark lg:leading-10">Uhu! Pedido confirmado</h1>
                <p className="font-Roboto text-lg text-base-subtitle leading-6">Agora é só aguardar que logo o café chegará até você</p>
                <div className="mt-10 success-border p-5 lg:p-10 flex flex-col gap-y-8">
                    <div className="flex flex-col md:flex-row w-full lg:gap-x-3 ">
                        <div className="bg-purple px-2.5 rounded-full flex items-center justify-center">
                            <MapPin className="map-icon fill-white" size={16} />
                        </div>
                        <div className="">
                            <p className="font-Roboto text-sm text-base-text leading-5">
                                Entrega em 
                                <strong> Rua João Daniel Martinelli, 102 </strong>
                                <br /> Farrapos - Porto Alegre, RS
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full lg:gap-x-3 ">
                        <div className="bg-yellow px-2.5 rounded-full flex items-center justify-center">
                            <Timer className="map-icon fill-white" size={16} />
                        </div>
                        <div className="">
                            <p className="font-Roboto text-sm text-base-text leading-5">
                                Previsão de entrega <br />
                                <strong>20 min - 30 min </strong>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full lg:gap-x-3 ">
                        <div className="bg-yellow-dark px-2.5 rounded-full flex items-center justify-center">
                            <CurrencyDollar className="map-icon fill-white" size={16} />
                        </div>
                        <div className="">
                            <p className="font-Roboto text-sm text-base-text leading-5">
                                Pagamento na entrega <br />
                                <strong>Cartão de Crédito </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <img src={illustration} alt="delivery guy wearing a orange t-shirt and green paints driving a purple motorcycle" />
            </div>
        </main>
    )
}