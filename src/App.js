import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './pages/Home/Home'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main/*' element={<MainLayout />} />
      </Routes>
    </Router>
  )
}

export default App
