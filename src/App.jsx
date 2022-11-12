import { Card } from './components/Card'
import { Header } from './components/Header'
import './styles/theme.css'

export function App() {
  return (
    <div className="">
      <Header />
      <div className="w-full grid  lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}