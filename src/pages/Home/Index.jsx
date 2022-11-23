import { coffee } from '../../dtbase/coffees'
import { Header } from '../../layouts/Header'
import { Banner } from './components/Banner'
import { Card } from './components/Card'

export function Home(){
    return (
        <div className="">
            <Header />
            <Banner />
            <div className="py-4 px-4 md:px-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                {coffee.map(item => {
                    return(
                        <Card key={item.id} coffee={item}/>
                    )
                })}
            </div>
        </div>
    )
}