import React from 'react'
import ReactDOM from 'react-dom/client' // Chú ý import từ 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')) // Tạo root
root.render(<App />) // Sử dụng render của root
