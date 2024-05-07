import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import SingleProduct from './Components/FilteredProducts/SingleProduct';
import { useSelector } from 'react-redux';
import Login from './Components/Login/Login';



function App() {
  
  const cart =useSelector((state)=>state.cart.cart);
  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  const totalPrice = useSelector((state)=>state.cart.totalPrice);
  const user =useSelector((state)=>state.user.user);

  const { authUser} = user;
   
  console.log("cart",cart);
  console.log("total amount",totalAmount);
  console.log("total price",totalPrice);
  console.log("user",user);
   console.log("authuser",authUser)
      
  return (     
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={authUser ? <Main/>:<Login/>}/>
    <Route path='/filtered/:type' element={<FilteredProducts/>}/>
    <Route path='/filtered/:type/:id' element={<SingleProduct/>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
