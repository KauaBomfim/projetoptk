import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from "./pages/Main/Burguers";
import PizzasPage from "./pages/Main/Pizzas";
import DrinksPage from "./pages/Main/Drinks";
import Desserts from "./pages/Main/Desserts";

import MyCartPage from './pages/Mycart'
import Payment from './pages/Payment';
import OrderSuccessPage from './pages/Orders/Sucess/index.';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<BurgersPage />} />
        <Route path='Pizzas' element={<PizzasPage />} />
        <Route path='Drinks' element={<DrinksPage />} />
        <Route path='Desserts' element={<Desserts />} />
      </Route>
      <Route path='cart' element={<MyCartPage />}/>
      <Route path='payment' element={<Payment />}/>
      <Route path='order'>
        <Route path='success/:orderId' element={<OrderSuccessPage />} />
      </Route>
    </Routes>
  )
}
