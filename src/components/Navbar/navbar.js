import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css' // Đường dẫn đến file css

// Import icon viền
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as LocationIcon } from '../../assets/icons/location-alt.svg'
import { ReactComponent as DocumentGearIcon } from '../../assets/icons/document-gear.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/map-marker-plus.svg'

// Import icon fill
import { ReactComponent as BellFillIcon } from '../../assets/icons/bell (1).svg'
import { ReactComponent as UserFillIcon } from '../../assets/icons/user (1).svg'
import { ReactComponent as LocationFillIcon } from '../../assets/icons/location-alt (1).svg'
import { ReactComponent as DocumentGearFillIcon } from '../../assets/icons/document-gear (1).svg'
import { ReactComponent as PlusFillIcon } from '../../assets/icons/map-marker-plus (1).svg'

const Navbar = () => {
  // Sử dụng state để theo dõi trạng thái chọn của mỗi icon
  const [selectedIcon, setSelectedIcon] = useState(null) // null có nghĩa là không có icon nào được chọn

  // Hàm xử lý khi người dùng click vào icon
  const handleIconClick = iconName => {
    setSelectedIcon(selectedIcon === iconName ? null : iconName) // Nếu click vào icon đã chọn, bỏ chọn, nếu không, chọn icon mới
  }

  return (
    <div className='navbar__container'>
      <div className='navbar'>
        <ul>
          <li onClick={() => handleIconClick('bell')}>
            {selectedIcon === 'bell' ? <BellFillIcon /> : <BellIcon />}
            <Link to='/register'>Đăng Ký</Link>
          </li>
          <li onClick={() => handleIconClick('user')}>
            {selectedIcon === 'user' ? <UserFillIcon /> : <UserIcon />}
            <Link to='/login'>Đăng Nhập</Link>
          </li>
          <li onClick={() => handleIconClick('plus')}>
            {selectedIcon === 'plus' ? <PlusFillIcon /> : <PlusIcon />}
            <Link to='/create-order'>Tạo Đơn</Link>
          </li>
          <li onClick={() => handleIconClick('location')}>
            {selectedIcon === 'location' ? (
              <LocationFillIcon />
            ) : (
              <LocationIcon />
            )}
            <Link to='/order-tracking'>Theo Dõi Đơn Hàng</Link>
          </li>
          <li onClick={() => handleIconClick('documentGear')}>
            {selectedIcon === 'documentGear' ? (
              <DocumentGearFillIcon />
            ) : (
              <DocumentGearIcon />
            )}
            <Link to='/order-management'>Quản Lý Đơn Hàng</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
