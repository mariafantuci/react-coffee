import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Index'

export function Router() {
  return (
    <Routes>
      <Route path="/">
          <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}