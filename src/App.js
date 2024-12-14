import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Import react-router-dom
import Navbar from './components/navbar' // Import Navbar
import Searchbar from './components/searchbar'
import Home from './pages/Home' // Các trang của bạn
import CreateOrder from './pages/CreateOrder'
import OrderTracking from './pages/OrderTracking'
import Profile from './pages/Profile'
import Login from './pages/Login'
import './App.css' // Import file css

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Thêm Navbar vào đây */}
      <Searchbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-order' element={<CreateOrder />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
