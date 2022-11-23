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
      <div className="px-10 lg:px-36 w-full grid lg:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-7">
      { 
        coffees.map(coffee => {
          return(
            <Card key={coffee.id} coffee={coffee} />
          )
        })
      }
      </div>
    </div>
  )
}