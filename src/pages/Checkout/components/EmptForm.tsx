import { NavLink } from 'react-router-dom';

export function EmptForm(){
    return (
        <div className="flex w-full flex-col items-center">
            <h3 className="font-baloo font-bold text-lg mt-4 mb-2">Carrinho vazio</h3>
            <NavLink to="/" title="Home">
                <p className="mb-8 text-center text-base-label text-xs leading-4 hover:text-black hover:cursor-pointer hover:underline">Continue comprando</p>
            </NavLink>
        </div>
    )
}