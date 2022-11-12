import logo from '../assets/logo.svg'

export function Header () {
    return (
        <header>
            <img src={logo} alt="coffee purple" />
            <div className="">
                <div className="">
                    Prudente, SP
                </div>
            </div>
        </header>
    )
}