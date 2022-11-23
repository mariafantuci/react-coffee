import { Card } from './components/Card'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { coffees } from './database/coffees'

import './styles/theme.css'

export function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <h2 className="px-10 lg:px-36 font-baloo font-extrabold text-2xl leading-10 mb-14">Nossos cafés</h2>
      <div className="px-10 lg:px-36 w-full grid lg:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-7">
      { 
        coffees.map(coffee => {
          return( coffee.stock &&
            <Card key={coffee.id} coffee={coffee} />
          )
        })
      }
      </div>
    </div>
  )
}