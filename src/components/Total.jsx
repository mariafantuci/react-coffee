export function Total(){
    return (
        <div className="mb-10">
            <div className="my-6 grid grid-cols-2">
                <div className="flex flex-col gap-3">
                    <p className="text-xs leading-4 text-base-text">Total de itens</p>
                    <p className="text-xs leading-4 text-base-text">Entrega</p>
                    <h4 className="font-Roboto font-bold text-lg leading-7 text-base-subtitle">Total</h4>
                </div>
                <div className="flex flex-col gap-3 w-full items-end">
                    <p className="text-xs leading-4 text-base-text">R$ 29,70</p>
                    <p className="text-xs leading-4 text-base-text">R$ 3,50</p>
                    <h4 className="font-Roboto font-bold text-lg leading-7 text-base-subtitle">R$ 33,20</h4>
                </div>
            </div>
            <button className="w-full rounded-lg flex items-center justify-center py-3 uppercase text-white bg-yellow-dark text-xs font-Roboto bold">Confirmar pedido</button>
        </div>
    )
}