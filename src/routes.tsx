import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from "./pages/Main/Burguers";
import PizzasPage from "./pages/Main/Pizzas";
import DrinksPage from "./pages/Main/Drinks";
import Desserts from "./pages/Main/Desserts";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<BurgersPage />} />
        <Route path='Pizzas' element={<PizzasPage />} />
        <Route path='Drinks' element={<DrinksPage />} />
        <Route path='Desserts' element={<Desserts />} />
      </Route>
    </Routes>
  )
}
