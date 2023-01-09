import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { IMaskInput } from "react-imask";
import { useContext, MouseEvent, FocusEvent, useState } from 'react';
import { CoffeeContext } from '../../../Context/CoffeeContext';
import { CartItem } from './CartItem';
import { Total } from './Total';
import { EmptForm } from './EmptForm';

interface formDataType {
    district: string;
    cep: string;
    complement: string;
    city: string;
    street: string;
    uf: string;
    number: string;
    payment: string;
}

export function Form(){
    const { cartItem, setCompletedForm } = useContext(CoffeeContext);
    const [formData, setFormData] = useState<formDataType>({
        district: "",
        cep: "",
        complement: "",
        city: "",
        street: "",
        uf: "",
        number: "",
        payment: "credit-card",
    });

    function selectedPaymentMethod(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>){
        event.preventDefault();
        const paymentTypes = document.querySelectorAll('.payment-type')
        paymentTypes.forEach((type) => {
            type.classList.remove('active')
            if((type as HTMLInputElement).value == (event.target as HTMLInputElement).value){
                type.classList.add('active')
                setFormData({...formData, payment: (type as HTMLInputElement).value})
            }
        })
    }
    
    function handleBlurCep(event: FocusEvent<HTMLElement>){
        const value = (event.target as HTMLInputElement).value.replace(/\D/g, '');
        console.log(value)
        if(value != ''){
            fetch(`https://viacep.com.br/ws/${value}/json/`)
            .then(response => response.json())
            .then(data => setFormData({
                    district: data.bairro,
                    cep: data.cep,
                    complement: data.complemento,
                    city: data.localidade,
                    street: data.logradouro,
                    uf: data.uf,
                    number: '',
                    payment: "credit-card",
                })
            )
            .catch(() => setFormData({
                    district: "",
                    cep: "",
                    complement: "",
                    city: "",
                    street: "",
                    uf: "",
                    number: "",
                    payment: "credit-card",
                })
            )
        }
    }

    function handleFocusRemoveLabel(){
        const optional = document.querySelector('#optional')
        if(optional){
            optional.classList.add('hidden')
        }
    }

    function handleBlurRemoveLabel(event: FocusEvent<HTMLElement>){
        const value = (event.target as HTMLInputElement).value;
        const optional = document.querySelector('#optional');
        if(optional && value.length == 0){
            optional.classList.remove('hidden')
        }
    }

    function handleOnBlurNumber(event: FocusEvent<HTMLElement>){
        const value = (event.target as HTMLInputElement).value
        if(value != ''){
            setFormData({...formData, number: value})
        }
    }

    function handleOnBlurFormDataCompleted(event: FocusEvent<HTMLElement>){
        if(formData.district != '' && 
            formData.cep != '' && 
            formData.city != '' && 
            formData.street != '' && 
            formData.uf != '' && 
            formData.number != '' && 
            formData.payment != ''
        ){
            setCompletedForm(true)
        }else{
            setCompletedForm(false)
        }
    }

    return (
        <div className="py-10 px-10 lg:px-36 grid form-container gap-x-8 relative">
            <div className="pb-4">
                <h2 className="font-baloo font-bold text-md leading-6 mb-6 ">Complete seu pedido</h2>
                <form onBlur={handleOnBlurFormDataCompleted} className="bg-base-card p-5 lg:p-10 flex flex-col gap-y-4 rounded-lg">
                    <div className="flex w-full mb-8">
                        <MapPinLine size={22} className="text-yellow-dark mr-2"/>
                        <div className="">
                            <h4 className="font-Roboto text-sm leading-5 text-base-subtitle mb-0.5">Endereço de Entrega</h4>
                            <p className="font-Roboto text-xs leading-4 text-base-text">Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <IMaskInput
                        onBlur={handleBlurCep}
                        className="cep lg:!w-1/3"
                        placeholder="CEP"
                        mask="00000-000"
                        required
                    />
                    <input type="text" value={formData.street} id="street" name="street" placeholder="Rua" required/>
                    <div className="flex gap-x-3">
                        <input required onBlur={handleOnBlurNumber} id="number" name="number" className="lg:!w-1/2" type="text" placeholder="Número"/>
                        <div className="relative w-full">
                            <input onBlur={handleBlurRemoveLabel} onFocus={handleFocusRemoveLabel} id="complement" name="complement" type="text" placeholder="Complemento"/>
                            <span className="absolute top-4 right-4 italic text-xxs leading-4 text-base-label" id="optional">Opcional</span>
                        </div>
                    </div>
                    <div className="flex  gap-x-3">
                        <input required value={formData.district} id="district" name="district" className="lg:!w-[60%]" type="text" placeholder="Bairro"/>
                        <input required value={formData.city} id="city" name="city" type="text" placeholder="Cidade"/>
                        <input required className="w-1/4 lg:!w-[15%] uf" list="uf-suggestions" type="text" value={formData.uf} id="uf" name="uf" placeholder="UF"/>
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
                        <button onClick={selectedPaymentMethod} value="credit-card" className="flex w-full items-center bg-base-button rounded-lg gap-x-3 p-4 text-base-text font-Roboto text-xxs leading-5 uppercase border hover:bg-base-hover payment-type active">
                            <CreditCard size={16} className="text-purple mr-2"/>
                            Cartão de crédito
                        </button>
                        <button onClick={selectedPaymentMethod} value="debit-card" className="flex w-full items-center bg-base-button rounded-lg gap-x-3 p-4 text-base-text font-Roboto text-xxs leading-5 uppercase border hover:bg-base-hover payment-type ">
                            <Bank size={16} className="text-purple mr-2"/>
                            cartão de débito
                        </button>
                        <button onClick={selectedPaymentMethod} value="cash" className="flex w-full items-center bg-base-button rounded-lg gap-x-3 p-4 text-base-text font-Roboto text-xxs leading-5 uppercase border hover:bg-base-hover payment-type ">
                            <Money size={16} className="text-purple mr-2"/>
                            dinheiro
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="font-baloo font-bold text-md leading-6 mb-6 ">Cafés selecionados</h2>
                <div className="bg-base-card p-5 lg:p-10 flex flex-col gap-y-4 box-border rounded-tl-md rounded-bl-large rounded-br-md rounded-tr-large">
                {
                    cartItem.map(item => {
                        return(
                            <CartItem key={item.id} coffee={item}/>
                        )
                    })
                }
                {
                    cartItem.length > 0 &&
                    <Total />
                }
                {
                    cartItem.length == 0 &&
                    <EmptForm />
                }
                </div>
            </div>
        </div>
    )
}