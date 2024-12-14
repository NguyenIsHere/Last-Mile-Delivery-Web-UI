import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Searchbar from './components/Searchbar/searchbar'
import Home from './pages/Home'
import CreateOrder from './pages/CreateOrder/CreateOrder'
import OrderTracking from './pages/OrderTracking/OrderTracking'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Thêm Navbar vào đây */}
      <Searchbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-order' element={<CreateOrder />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
