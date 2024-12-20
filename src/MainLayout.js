import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Searchbar from './components/Searchbar/searchbar'
import CreateOrder from './pages/CreateOrder/CreateOrder'
import OrderTracking from './pages/OrderTracking/OrderTracking'
import OrderManagement from './pages/OrderManagement/OrderManagement'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import './App.css'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <div className='content'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-order' element={<CreateOrder />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
          <Route path='/order-management' element={<OrderManagement />} />
        </Routes>
      </div>
    </>
  )
}

export default MainLayout
