import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './pages/Home/Home'
import GrabHome from './pages/GrabHome/GrabHome'
import GrabOrder from './pages/GrabOrder/GrabOrder'
import NewOrder from './pages/NewOrder/NewOrder'
import Upload_1 from './pages/Upload-1/Upload-1'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grab' element={<GrabHome />} />
        <Route path='/grab-order' element={<GrabOrder />} />
        <Route path='/new' element={<NewOrder />} />
        <Route path='/upload-1' element={<Upload_1 />} />
        <Route path='/main/*' element={<MainLayout />} />
      </Routes>
    </Router>
  )
}

export default App
