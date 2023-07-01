import React from 'react';
import Home from './Components/Home';
import CartPage from './Components/CartPage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return(
    <div>
      <Navbar/>
      {/* <Home/>
      <CartPage/> */}
      <Routes>
        <Route path = "" element = {<Home/>}/>
        <Route path = "/cart" element = {<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App;