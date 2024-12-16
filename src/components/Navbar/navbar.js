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
  // State quản lý hover cho từng icon
  const [hoveredIcon, setHoveredIcon] = useState(null)
  // State quản lý icon đã được chọn
  const [selectedIcon, setSelectedIcon] = useState(null)

  // Hàm handle hover icon
  const handleHover = icon => {
    setHoveredIcon(icon)
  }

  // Hàm handle rời khỏi hover
  const handleLeave = () => {
    setHoveredIcon(null)
  }

  // Hàm handle click chọn icon
  const handleClick = icon => {
    setSelectedIcon(icon)
  }

  return (
    <div className='navbar__container'>
      <div className='navbar'>
        <div className='logo-btn'>Grab</div>
        <Link
          className={`btn ${selectedIcon === 'bell' ? 'active' : ''}`}
          to='/main/register'
          onMouseEnter={() => handleHover('bell')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('bell')}
        >
          {selectedIcon === 'bell' || hoveredIcon === 'bell' ? (
            <BellFillIcon />
          ) : (
            <BellIcon />
          )}
          Đăng Ký
          <div className='sign'></div>
        </Link>

        <Link
          className={`btn ${selectedIcon === 'user' ? 'active' : ''}`}
          to='/main/login'
          onMouseEnter={() => handleHover('user')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('user')}
        >
          {selectedIcon === 'user' || hoveredIcon === 'user' ? (
            <UserFillIcon />
          ) : (
            <UserIcon />
          )}
          Đăng Nhập
          <div className='sign'></div>
        </Link>

        <Link
          className={`btn ${selectedIcon === 'location' ? 'active' : ''}`}
          to='/main/create-order'
          onMouseEnter={() => handleHover('location')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('location')}
        >
          {selectedIcon === 'location' || hoveredIcon === 'location' ? (
            <LocationFillIcon />
          ) : (
            <LocationIcon />
          )}
          Tạo Đơn
          <div className='sign'></div>
        </Link>

        <Link
          className={`btn ${selectedIcon === 'document' ? 'active' : ''}`}
          to='/main/order-tracking'
          onMouseEnter={() => handleHover('document')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('document')}
        >
          {selectedIcon === 'document' || hoveredIcon === 'document' ? (
            <DocumentGearFillIcon />
          ) : (
            <DocumentGearIcon />
          )}
          Theo Dõi Đơn Hàng
          <div className='sign'></div>
        </Link>

        <Link
          className={`btn ${selectedIcon === 'plus' ? 'active' : ''}`}
          to='/main/order-management'
          onMouseEnter={() => handleHover('plus')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('plus')}
        >
          {selectedIcon === 'plus' || hoveredIcon === 'plus' ? (
            <PlusFillIcon />
          ) : (
            <PlusIcon />
          )}
          Quản Lý Đơn Hàng
          <div className='sign'></div>
        </Link>
        <Link
          className={`btn ${selectedIcon === 'plus' ? 'active' : ''}`}
          to='/main/order-management'
          onMouseEnter={() => handleHover('plus')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('plus')}
        >
          {selectedIcon === 'plus' || hoveredIcon === 'plus' ? (
            <PlusFillIcon />
          ) : (
            <PlusIcon />
          )}
          Quản Lý Đơn Hàng
          <div className='sign'></div>
        </Link>
        <Link
          className={`btn ${selectedIcon === 'plus' ? 'active' : ''}`}
          to='/main/order-management'
          onMouseEnter={() => handleHover('plus')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('plus')}
        >
          {selectedIcon === 'plus' || hoveredIcon === 'plus' ? (
            <PlusFillIcon />
          ) : (
            <PlusIcon />
          )}
          Quản Lý Đơn Hàng
          <div className='sign'></div>
        </Link>
        <Link
          className={`btn ${selectedIcon === 'plus' ? 'active' : ''}`}
          to='/main/order-management'
          onMouseEnter={() => handleHover('plus')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('plus')}
        >
          {selectedIcon === 'plus' || hoveredIcon === 'plus' ? (
            <PlusFillIcon />
          ) : (
            <PlusIcon />
          )}
          Quản Lý Đơn Hàng
          <div className='sign'></div>
        </Link>
        <Link
          className={`btn ${selectedIcon === 'plus' ? 'active' : ''}`}
          to='/main/order-management'
          onMouseEnter={() => handleHover('plus')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('plus')}
        >
          {selectedIcon === 'plus' || hoveredIcon === 'plus' ? (
            <PlusFillIcon />
          ) : (
            <PlusIcon />
          )}
          Quản Lý Đơn Hàng
          <div className='sign'></div>
        </Link>
        <Link
          className={`btn ${selectedIcon === 'plus' ? 'active' : ''}`}
          to='/main/order-management'
          onMouseEnter={() => handleHover('plus')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('plus')}
        >
          {selectedIcon === 'plus' || hoveredIcon === 'plus' ? (
            <PlusFillIcon />
          ) : (
            <PlusIcon />
          )}
          Quản Lý Đơn Hàng
          <div className='sign'></div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
