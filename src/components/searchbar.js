import React from 'react'
import { Link } from 'react-router-dom' // Sử dụng Link để điều hướng
import '../styles/searchbar.css' // Đường dẫn đến file css

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <input type='text' placeholder='Tìm kiếm' />
      <div className='menu-group'>
        <button>Thông báo</button>
        <Link to='/profile'>Thông tin cá nhân</Link>
      </div>
    </div>
  )
}

export default Searchbar
