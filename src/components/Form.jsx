import { CartItem } from './CartItem';

export function Form(){
    return (
        <div className="py-10 px-10 lg:px-36">
            <div className="">
                <h2 className="font-baloo font-bold text-md leading-6 mb-6 ">Complete seu pedido</h2>
                <form>
                </form>
            </div>
            <div className="">
                <h2 className="font-baloo font-bold text-md leading-6 mb-6 ">Cafés selecionados</h2>
                <form>
                    <CartItem />
                </form>
            </div>
        </div>
    )
}