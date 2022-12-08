import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { CartItem } from './CartItem';
import { Total } from './Total';

export function Form(){
    return (
        <div className="py-10 px-10 lg:px-36 grid form-container gap-x-8">
            <div className="pb-4">
                <h2 className="font-baloo font-bold text-md leading-6 mb-6 ">Complete seu pedido</h2>
                <form className="bg-base-card p-5 lg:p-10 flex flex-col gap-y-4 rounded-lg">
                    <div className="flex w-full mb-8">
                        <MapPinLine size={22} className="text-yellow-dark mr-2"/>
                        <div className="">
                            <h4 className="font-Roboto text-sm leading-5 text-base-subtitle mb-0.5">Endereço de Entrega</h4>
                            <p className="font-Roboto text-xs leading-4 text-base-text">Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <input className="lg:!w-1/3" type="text" placeholder="CEP"/>
                    <input type="text" placeholder="Rua"/>
                    <div className="flex gap-x-3">
                        <input className="lg:!w-1/2" type="text" placeholder="Número"/>
                        <div className="relative w-full">
                            <input type="text" placeholder="Complemento"/>
                            <span className="absolute top-4 right-4 italic text-xxs leading-4 text-base-label">Opcional</span>
                        </div>
                    </div>
                    <div className="flex  gap-x-3">
                        <input className="lg:!w-[60%]" type="text" placeholder="Bairro"/>
                        <input type="text" placeholder="Cidade"/>
                        <input className="w-1/4 lg:!w-[15%] uf" list="uf-suggestions" type="text" placeholder="UF"/>
                    </div>
                    <datalist id="uf-suggestions">
                        <option value="AC">AC </option>
                        <option value="AL">AL</option>
                        <option value="AP">AP </option>
                        <option value="AM">AM</option>
                        <option value="BA">BA </option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </datalist>
                </form>
                <div className="mt-3 bg-base-card p-5 lg:p-10 flex flex-col gap-y-4 rounded-lg">
                    <div className="flex w-full mb-8">
                        <CurrencyDollar size={22} className="text-purple mr-3"/>
                        <div className="">
                            <h4 className="font-Roboto text-sm leading-5 text-base-subtitle mb-0.5">Endereço de Entrega</h4>
                            <p className="font-Roboto text-xs leading-4 text-base-text">Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <div className="flex w-full gap-x-3">
                        <button className="flex w-full items-center bg-base-button rounded-lg gap-x-3 p-4">
                            <CreditCard size={16} className="text-purple mr-2"/>
                            <p className="text-base-text font-Roboto text-xxs leading-5 uppercase">Cartão de crédito</p>
                        </button>
                        <button className="flex w-full items-center bg-base-button rounded-lg gap-x-3 p-4">
                            <Bank size={16} className="text-purple mr-2"/>
                            <p className="text-base-text font-Roboto text-xxs leading-5 uppercase">cartão de débito</p>
                        </button>
                        <button className="flex w-full items-center bg-base-button rounded-lg gap-x-3 p-4">
                            <Money size={16} className="text-purple mr-2"/>
                            <p className="text-base-text font-Roboto text-xxs leading-5 uppercase">dinheiro</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="font-baloo font-bold text-md leading-6 mb-6 ">Cafés selecionados</h2>
                <form className="bg-base-card p-5 lg:p-10 flex flex-col gap-y-4 box-border rounded-tl-md rounded-bl-large rounded-br-md rounded-tr-large">
                    <CartItem />
                    <CartItem />
                    <Total />
                </form>
            </div>
        </div>
    )
}