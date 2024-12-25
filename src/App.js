import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './pages/Home/Home'
import GrabHome from './pages/GrabHome/GrabHome'
import GrabOrder from './pages/GrabOrder/GrabOrder'
import NewOrder from './pages/NewOrder/NewOrder'
import Upload_1 from './pages/Upload-1/Upload-1'
import Upload_2 from './pages/Upload-2/Upload-2'
import Upload_3 from './pages/Upload-3/Upload-3'
import Upload_4 from './pages/Upload-4/Upload-4'
import Claude from './pages/Claude/Claude'
import Order from './pages/Claude/Order'
import Tracking from './pages/Claude/Tracking'
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
        <Route path='/upload-2' element={<Upload_2 />} />
        <Route path='/upload-3' element={<Upload_3 />} />
        <Route path='/upload-4' element={<Upload_4 />} />
        <Route path='/claude' element={<Claude />} />
        <Route path='/claude/order' element={<Order />} />
        <Route path='/claude/tracking' element={<Tracking />} />
        <Route path='/main/*' element={<MainLayout />} />
      </Routes>
    </Router>
  )
}

export default App
