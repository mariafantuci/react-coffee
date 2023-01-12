import illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react';
import { CoffeeContext } from '../../Context/CoffeeContext';

export function Success(){
    const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:form-data-1.0.0'
    )

    if(!storedStateAsJson){
        window.location.href = window.location.origin + '/'
    }
    const { clearCartitemQty } = useContext(CoffeeContext);
    const {city, number, payment, street, uf } = JSON.parse(storedStateAsJson!)

    clearCartitemQty();
    
    const convertToFullName = function(uf: string) {
        let data;
        switch (uf.toUpperCase()) {
          case "AC" : data = "Acre";                  break;
          case "AL" : data = "Alagoas";               break;
          case "AM" : data = "Amazonas";              break;
          case "AP" : data = "Amapa";                 break;
          case "BA" : data = "Bahia";                 break;
          case "CE" : data = "Ceara";                 break;
          case "DF" : data = "Distrito Federal";      break;
          case "ES" : data = "Espirito Santo";        break;
          case "GO" : data = "Goias";                 break;
          case "MA" : data = "Maranhao";              break;
          case "MG" : data = "Minas Gerais";          break;
          case "MS" : data = "Mato Grosso do Sul";    break;
          case "MT" : data = "Mato Grosso";           break;
          case "PA" : data = "Para";                  break;
          case "PB" : data = "Paraiba";               break;
          case "PE" : data = "Pernambuco";            break;
          case "PI" : data = "Piaui";                 break;
          case "PR" : data = "Parana";                break;
          case "RJ" : data = "Rio de Janeiro";        break;
          case "RN" : data = "Rio Grande do Norte";   break;
          case "RO" : data = "Rondonia";              break;
          case "RR" : data = "Roraima";               break;
          case "RS" : data = "Rio Grande do Sul";     break;
          case "SC" : data = "Santa Catarina";        break;
          case "SE" : data = "Sergipe";               break;
          case "SP" : data = "São Paulo";             break;
          case "TO" : data = "Tocantins";             break;
        }
        return data;
    };

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
                                <strong> { street }, { number } </strong>
                                <br /> { city } - { convertToFullName(uf) }, { uf }
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
                                <strong>{ payment }</strong>
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