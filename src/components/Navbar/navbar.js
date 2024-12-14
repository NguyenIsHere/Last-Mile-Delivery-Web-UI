import React from 'react'
import { Link } from 'react-router-dom' // Sử dụng Link để điều hướng
import './NavBar.css' // Đường dẫn đến file css

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/'>Trang Chủ</Link>
          </li>
          <li>
            <Link to='/register'>Đăng ký</Link>
          </li>
          <li>
            <Link to='/login'>Đăng nhập</Link>
          </li>
          <li>
            <Link to='/create-order'>Tạo Đơn</Link>
          </li>
          <li>
            <Link to='/order-tracking'>Theo Dõi Đơn Hàng</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
