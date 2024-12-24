import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Upload-3.css'
import { ReactComponent as Dot } from '../../assets/icons/dot-circle (1).svg'
import { ReactComponent as Destination } from '../../assets/icons/marker.svg'
import { ReactComponent as Exchange } from '../../assets/icons/exchange.svg'
import { ReactComponent as Right } from '../../assets/icons/angle-small-right (1).svg'
import { ReactComponent as Boxes } from '../../assets/icons/boxes (1).svg'
import { ReactComponent as Upload } from '../../assets/icons/upload.svg'
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'
import { ReactComponent as Plus } from '../../assets/icons/plus (1).svg'
import { ReactComponent as Minus } from '../../assets/icons/minus.svg'
import { ReactComponent as Bookmark } from '../../assets/icons/bookmark (1).svg'
import { ReactComponent as BookmarkFill } from '../../assets/icons/bookmark (2).svg'
import { ReactComponent as Calendar } from '../../assets/icons/calendar-minus.svg'
import { ReactComponent as Dots } from '../../assets/icons/menu-dots-vertical.svg'
import { ReactComponent as Momo } from '../../assets/icons/momo_square_pinkbg.svg'
import { ReactComponent as Copy } from '../../assets/icons/copy.svg'

import Fast from '../../assets/images/Instant_36x36.png'
import TwoHours from '../../assets/images/UpfrontBatchV2_36x36.png'
import Cheap from '../../assets/images/SameDay_36x36.png'
import Food from '../../assets/images/Food_36x36.png'

import Bike from '../../assets/images/Bike_36x36@2x.png'
import Van from '../../assets/images/Van_36x36@2x.png'
import BoxTruck from '../../assets/images/BoxTruck_36x36@2x.png'

import GrabPackage from '../../assets/images/home-icon-Delivery.png'

import Map from '../../assets/images/map.png'

const RightIcon = () => {
  return (
    <Right
      style={{
        fill: 'var(--font-color-60)',
        width: '14px',
        height: '14px'
      }}
    />
  )
}

const LeftIcon = () => {
  return (
    <Right
      style={{
        fill: 'var(--font-color-60)',
        width: '14px',
        height: '14px',
        transform: 'rotate(-180deg)'
      }}
    />
  )
}

const DownIcon = () => {
  return (
    <Right
      style={{
        fill: 'var(--font-color-60)',
        width: '14px',
        height: '14px',
        transform: 'rotate(90deg)'
      }}
    />
  )
}

const MoMoIcon = () => {
  return (
    <Momo
      style={{
        width: '20px',
        height: '20px'
      }}
    />
  )
}

const DotsIcon = () => {
  return (
    <Dots
      style={{
        fill: 'var(--font-color-100)',
        width: '20px',
        height: '20px'
      }}
    />
  )
}

const DotIcon = () => {
  return (
    <Dot
      style={{ fill: 'var(--blue-color-100)', width: '20px', height: '20px' }}
    />
  )
}

const DestinationIcon = () => {
  return (
    <Destination
      style={{
        fill: 'var(--orange-color-100)',
        width: '20px',
        height: '20px'
      }}
    />
  )
}

const CalendarIcon = () => {
  return (
    <Calendar
      style={{ fill: 'var(--font-color-100)', width: '14px', height: '14px' }}
    />
  )
}

const BoxesIcon = () => {
  return (
    <Boxes
      style={{ fill: 'var(--font-color-60)', width: '17px', height: '15.5px' }}
    />
  )
}

const UploadIcon = () => {
  return (
    <Upload
      style={{
        fill: 'var(--font-color-60)',
        width: '15.5px',
        height: '15.5px'
      }}
    />
  )
}

const CrossIcon = () => {
  return (
    <Cross
      style={{ fill: 'var(--font-color-100)', width: '20px', height: '20px' }}
    />
  )
}

const PlusIcon = () => {
  return (
    <Plus
      style={{ fill: 'var(--font-color-100)', width: '16px', height: '16px' }}
    />
  )
}

const MinusIcon = () => {
  return (
    <Minus
      style={{
        fill: 'var(--font-color-100)',
        width: '16px',
        height: '16px'
      }}
    />
  )
}

const BookmarkIcon = () => {
  return (
    <Bookmark
      style={{
        fill: 'var(--font-color-100)',
        width: '16px',
        height: '16px'
      }}
    />
  )
}

const BookmarkFillIcon = () => {
  return (
    <BookmarkFill
      style={{
        fill: 'var(--font-color-100)',
        width: '16px',
        height: '16px'
      }}
    />
  )
}

const CopyIcon = () => {
  return (
    <Copy
      style={{
        fill: 'var(--font-color-60)',
        width: '24px',
        height: '24px'
      }}
    />
  )
}

const Upload_3 = () => {
  // State quản lý checkbox "chọn tất cả"
  const [selectAll, setSelectAll] = useState(false)

  // Dữ liệu giả lập cho bảng đơn hàng
  const orders = [
    {
      id: 1,
      orderDate: 'Dec 08, 5:32 PM',
      sender: 'Nguyễn Ngọc Phú 091886759',
      senderAdress:
        '123 Nguyen Van Linh, District 7, Thu Duc, Ho Chi Minh City',
      receiver: 'Trần Thái Minh',
      receiverAdress: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
      size: 'M',
      weight: '1',
      deliveryType: 'Instant',
      vehicleType: 'Bike',
      price: '100.000'
    },
    {
      id: 2,
      orderDate: 'Dec 09, 9:15 AM',
      sender: 'Lê Thị Thu Hồng 091886759',
      senderAdress: '45 Bach Dang, Binh Thanh, Ho Chi Minh City',
      receiver: 'Phạm Văn Quang',
      receiverAdress: '56 Lê Lợi, District 1, Ho Chi Minh City',
      size: 'S',
      weight: '0.5',
      deliveryType: 'Express',
      vehicleType: 'Bike',
      price: '100.000'
    },
    {
      id: 3,
      orderDate: 'Dec 09, 3:20 PM',
      sender: 'Trần Văn Hùng 091886759',
      senderAdress: '98 Hai Bà Trưng, District 3, Ho Chi Minh City',
      receiver: 'Nguyễn Thị Thanh',
      receiverAdress: '300 Vo Van Ngan, Thu Duc, Ho Chi Minh City',
      size: 'L',
      weight: '2',
      deliveryType: 'Instant',
      vehicleType: 'Car',
      price: '100.000'
    },
    {
      id: 4,
      orderDate: 'Dec 10, 1:45 PM',
      sender: 'Hoàng Phương Linh 091886759',
      senderAdress: '18 Pasteur, District 1, Ho Chi Minh City',
      receiver: 'Lê Quốc Việt',
      receiverAdress: '10 Tran Hung Dao, District 1, Ho Chi Minh City',
      size: 'XL',
      weight: '3',
      deliveryType: 'Same Day',
      vehicleType: 'Truck',
      price: '100.000'
    },
    {
      id: 5,
      orderDate: 'Dec 10, 6:10 PM',
      sender: 'Phạm Xuân An 091886759',
      senderAdress: '210 Le Loi, District 1, Ho Chi Minh City',
      receiver: 'Trần Thị Thảo',
      receiverAdress: '140 Nguyen Dinh Chieu, District 3, Ho Chi Minh City',
      size: 'M',
      weight: '1.5',
      deliveryType: 'Standard',
      vehicleType: 'Bike',
      price: '100.000'
    }
  ]

  // Hàm để xử lý checkbox "chọn tất cả"
  const handleSelectAll = event => {
    setSelectAll(event.target.checked)
  }

  const [expandedRow, setExpandedRow] = useState(null)

  // Hàm xử lý mở rộng hoặc thu gọn hàng
  const handleToggleRow = id => {
    setExpandedRow(prev => (prev === id ? null : id)) // Đóng nếu cùng id, mở nếu khác
  }

  const showPackageType_dropdownRef = useRef(null) // Tạo tham chiếu đến dropdown

  const packageType = [
    'S: L20 x W25 x H20 cm',
    'M: L50 x W40 x H50 cm',
    'L: L60 x W70 x H60 cm',
    'XL: L170 x W120 x H100 cm'
  ]

  // Loại hàng hóa dropdown2
  const showPackageType_dropdownRef2 = useRef(null) // Tạo tham chiếu đến dropdown

  const packageType2 = [
    '1kg',
    '2kg',
    '3kg',
    '4kg',
    '5kg',
    '6kg',
    '7kg',
    '8kg',
    '9kg',
    '10kg',
    '11kg',
    '12kg',
    '13kg',
    '14kg',
    '15kg',
    '16kg',
    '17kg',
    '18kg',
    '19kg',
    '20kg'
  ]

  // Trạng thái hàng nào đang mở dropdown (cột Size)
  const [openPackageTypeRow, setOpenPackageTypeRow] = useState(null)

  const handleTogglePackageTypeDropdown = orderId => {
    // Nếu click lại cùng 1 hàng => đóng, khác hàng => mở hàng mới
    setOpenPackageTypeRow(prev => (prev === orderId ? null : orderId))
  }

  const handleSelect = (key, orderId) => {
    console.log('Bạn đã chọn:', key, 'cho orderId:', orderId)
    setOpenPackageTypeRow(null) // Đóng dropdown sau khi chọn
  }

  // Trạng thái hàng nào đang mở dropdown (cột Weight)
  const [openWeightRow, setOpenWeightRow] = useState(null)

  const handleToggleWeightDropdown = orderId => {
    setOpenWeightRow(prev => (prev === orderId ? null : orderId))
  }

  const handleSelectWeight = (key, orderId) => {
    console.log('Bạn đã chọn:', key, 'cho orderId:', orderId)
    setOpenWeightRow(null)
  }

  const sliderRef = useRef(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 200
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 200
    }
  }

  const [isModalOpen1, setIsModalOpen1] = useState(false)

  const openModal1 = () => setIsModalOpen1(true)
  const closeModal1 = () => setIsModalOpen1(false)
  // Hàm xử lý click ngoài modal
  const handleOutsideClick1 = e => {
    // Kiểm tra nếu click xảy ra ngoài modal-container-col
    if (!e.target.closest('.modal-container-col')) {
      closeModal1() // Đóng modal
    }
  }

  const [isModalOpen2, setIsModalOpen2] = useState(false)

  const openModal2 = () => setIsModalOpen2(true)
  const closeModal2 = () => setIsModalOpen2(false)
  // Hàm xử lý click ngoài modal
  const handleOutsideClick2 = e => {
    // Kiểm tra nếu click xảy ra ngoài modal-container-col
    if (!e.target.closest('.modal-container-col')) {
      closeModal2() // Đóng modal
    }
  }

  const [isModalOpen3, setIsModalOpen3] = useState(false)

  const openModal3 = () => setIsModalOpen3(true)
  const closeModal3 = () => setIsModalOpen3(false)
  // Hàm xử lý click ngoài modal
  const handleOutsideClick3 = e => {
    // Kiểm tra nếu click xảy ra ngoài modal-container-col
    if (!e.target.closest('.modal-container-col')) {
      closeModal3() // Đóng modal
    }
  }

  const [isModalOpen4, setIsModalOpen4] = useState(false)

  const openModal4 = () => setIsModalOpen4(true)
  const closeModal4 = () => setIsModalOpen4(false)
  // Hàm xử lý click ngoài modal
  const handleOutsideClick4 = e => {
    // Kiểm tra nếu click xảy ra ngoài modal-container-col
    if (!e.target.closest('.modal-container-col')) {
      closeModal4() // Đóng modal
    }
  }

  const [isModalOpen5, setIsModalOpen5] = useState(false)

  const openModal5 = () => setIsModalOpen5(true)
  const closeModal5 = () => setIsModalOpen5(false)
  // Hàm xử lý click ngoài modal
  const handleOutsideClick5 = e => {
    // Kiểm tra nếu click xảy ra ngoài modal-container-col
    if (!e.target.closest('.modal-container-col')) {
      closeModal5() // Đóng modal
    }
  }

  const [isModalOpen6, setIsModalOpen6] = useState(false)

  const openModal6 = () => setIsModalOpen6(true)
  const closeModal6 = () => setIsModalOpen6(false)
  // Hàm xử lý click ngoài modal
  const handleOutsideClick6 = e => {
    // Kiểm tra nếu click xảy ra ngoài modal-container-col
    if (!e.target.closest('.modal-container-col')) {
      closeModal6() // Đóng modal
    }
  }

  return (
    <div className='Upload_3__container'>
      <div className='app-layout-root'>
        <div className='grab-header-group'></div>
        <div className='app-layout'>
          <div className='header-1'>
            <div className='grab-logo'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='143'
                height='28'
                viewBox='0 0 143 28'
                fill='none'
              >
                <g opacity='0.8'>
                  <g clip-path='url(#clip0)'>
                    <path
                      d='M2.21644 14.2474C2.21644 18.1178 5.14807 21.086 8.9377 21.086C12.584 21.086 14.4196 18.735 14.4196 16.1468V15.2208H9.10433V16.6437H12.9659C12.9897 18.0451 11.7027 19.6836 8.93823 19.6836C5.88759 19.6836 3.76636 17.4274 3.76636 14.2458C3.76636 11.1828 6.05422 8.87921 9.20008 8.87921C11.2499 8.87921 12.8707 9.37776 14.3725 10.4228L14.4677 10.3517V9.02308C13.3473 8.23993 11.4409 7.47998 9.15247 7.47998C5.26709 7.47998 2.21644 10.4719 2.21644 14.2474ZM0 14.2474C0 19.3763 3.81344 23.1993 8.93982 23.1993C13.6113 23.1993 16.4715 20.2786 16.4715 15.5534V13.1291H9.10433V14.5083H15.1347V15.7905C15.1347 19.4949 12.8231 21.7985 8.93823 21.7985C4.67198 21.7985 1.50178 18.5452 1.50178 14.2474C1.50178 10.0682 4.83861 6.76745 9.15247 6.76745C11.2023 6.76745 13.0617 7.26601 14.4677 8.23993V6.8386C13.1093 5.86519 11.3213 5.36664 9.15247 5.36664C3.97901 5.36664 0 9.28448 0 14.2474ZM19.4962 15.4595V22.7956H20.9023V15.4822C20.9023 13.8437 21.9745 12.6801 23.5715 12.6801C24.0476 12.6801 24.4771 12.7986 24.9299 12.9889C25.0978 12.5742 25.3055 12.1766 25.5499 11.8015C25.0495 11.469 24.3105 11.2555 23.5953 11.2555C21.1884 11.2555 19.4962 12.9889 19.4962 15.4585V15.4595ZM17.4226 22.7967H18.8286V15.4585C18.8286 12.5599 20.7832 10.5904 23.6191 10.5904C24.5713 10.5904 25.5499 10.8993 25.9789 11.1607C26.2434 10.8518 26.5269 10.5193 26.9083 10.212C26.0265 9.59489 24.8347 9.23863 23.5477 9.23863C19.8057 9.23863 17.4226 11.7557 17.4226 15.4838V22.7967ZM39.469 14.58V16.6453C40.3027 15.5296 41.0179 14.5562 41.6855 13.7467C43.3782 11.6808 44.8551 10.5409 47.1435 10.5409C50.2418 10.5409 52.5058 12.8682 52.5058 16.1447C52.5058 19.3505 50.2894 21.7964 47.2387 21.7964C44.7599 21.7964 42.6149 20.1099 42.1145 17.8069L41.1136 19.1624C41.9002 21.4185 44.2124 23.1993 47.2155 23.1993C51.077 23.1993 53.9124 20.1126 53.9124 16.1468C53.9124 12.1341 51.0527 9.11847 47.1414 9.11847C43.0915 9.11689 41.2327 12.1341 39.469 14.58ZM43.8305 15.6245H43.7829L42.6863 17.1207C42.8767 18.8303 44.6171 21.1097 47.2387 21.1097C49.908 21.1097 51.8409 18.9489 51.8409 16.1231C51.8409 13.2972 49.8625 11.2081 47.1456 11.2081C44.5007 11.2081 42.9746 13.1312 41.9018 14.5562C41.3776 15.2445 40.4736 16.3607 39.4685 17.7616V20.0409C40.3979 18.6638 41.6611 17.049 42.5895 15.9333C44.1627 14.0571 45.1159 12.6326 47.1176 12.6326C49.0748 12.6326 50.4068 14.1288 50.4068 16.1231C50.4068 18.189 49.1436 19.7068 47.2372 19.7068C45.235 19.7068 43.8289 17.878 43.8289 15.8364L43.8305 15.6245ZM42.4239 4.13184V10.0444C42.8529 9.71189 43.3301 9.30662 43.8305 9.11847V4.13184H42.4239ZM40.327 12.2052C40.7561 11.6592 41.2327 11.0653 41.7331 10.5667V4.13184H40.327V12.2052ZM34.6072 18.9721L34.5833 18.9484C33.9877 19.4227 33.0101 19.7084 32.0807 19.7084C30.1764 19.7084 28.7439 18.2854 28.7439 16.17C28.7439 14.152 30.1505 12.6084 32.0331 12.6084C34.0591 12.6084 35.2985 14.0803 35.2985 16.0514V22.7972H36.7046V15.9808C36.7046 13.226 34.7738 11.2081 32.0569 11.2081C29.3639 11.2081 27.2903 13.226 27.2903 16.1705C27.2903 19.0912 29.3401 21.1808 32.0569 21.1097C33.0821 21.086 34.1305 20.706 34.6072 20.3719V18.9721ZM25.1685 16.1468C25.1685 20.2786 28.1001 23.1993 32.0564 23.1993C32.9382 23.1993 33.9634 22.9358 34.6066 22.4394V21.0385C34.1776 21.3948 33.1292 21.7985 32.0564 21.7985C28.8153 21.7985 26.6221 19.5186 26.6221 16.1468C26.6221 12.9415 28.9581 10.543 32.0564 10.543C35.1308 10.543 37.3716 12.7986 37.3716 15.957V22.7956H38.7999V15.9333C38.7999 11.9912 36.0111 9.09476 32.0548 9.09476C28.1715 9.09476 25.1685 12.1578 25.1685 16.1468Z'
                      fill='white'
                    />
                    <path
                      d='M66.9775 20.2046V22.7711H56.2666V5.65942H66.8817V8.22652H59.0575V12.7894H66.093V15.356H59.0575V20.2046H66.9775ZM80.8146 9.76963L75.9739 16.2593L80.721 22.6526V22.7711H77.3572L74.2325 18.4222L71.131 22.7711H67.7678V22.6526L72.4672 16.3068L67.6006 9.77174V9.65263H70.9644L74.2087 14.1686L77.4529 9.65263H80.8162L80.8146 9.76963ZM89.1657 23.1264C87.1857 23.1264 85.6114 22.0091 85.0629 20.8449H84.9433V27.9997H82.2V16.1882C82.2 11.8624 84.9671 9.22469 88.8795 9.22469C92.7918 9.22469 95.6066 11.8624 95.6066 16.1882C95.6066 20.5371 92.8156 23.1279 89.1657 23.1279V23.1264ZM88.9012 11.8134C86.635 11.8134 84.9412 13.5483 84.9412 16.3768C84.9412 18.896 86.6588 20.5355 88.9012 20.5355C91.1435 20.5355 92.8632 18.9192 92.8632 16.2841C92.8632 13.5499 91.1694 11.815 88.9033 11.815L88.9012 11.8134Z'
                      fill='white'
                    />
                    <path
                      d='M106.296 10.3894C105.82 11.0787 105.484 11.6252 105.198 12.4099L105.103 12.4811C104.44 12.1148 103.692 11.9265 102.934 11.9346C100.93 11.9346 100.096 13.4318 100.096 15.5467V22.8907H97.3502L97.3264 15.3091C97.3021 11.4592 99.2106 9.34375 103.027 9.34375C104.077 9.34375 105.508 9.74955 106.296 10.3894Z'
                      fill='white'
                    />
                    <path
                      d='M118.821 17.2566H109.207C109.517 19.2535 111.376 20.5131 113.907 20.5131C115.577 20.5131 117.104 20.1805 118.464 19.3009L118.535 19.3721V21.8701C117.152 22.7972 115.554 23.1297 113.525 23.1297C109.04 23.1297 106.344 20.5626 106.344 15.9517C106.344 11.9106 108.969 9.20117 112.857 9.20117C116.699 9.20117 118.917 11.7203 118.917 15.6424C118.924 16.1821 118.892 16.7215 118.821 17.2566ZM116.176 14.9509C116.176 13.0732 114.864 11.7888 112.717 11.7888C110.784 11.7888 109.353 13.0247 109.186 14.9509H116.176Z'
                      fill='white'
                    />
                    <path
                      d='M120.754 19.5385L120.825 19.4911C122.209 20.1324 123.784 20.5129 125.025 20.5129C126.767 20.5129 127.722 20.0613 127.722 19.0157C127.722 17.851 126.816 17.6607 125.623 17.3756L124.191 17.0425C121.83 16.496 120.469 15.5453 120.469 13.2159C120.469 10.3399 123.07 9.22266 125.933 9.22266C127.484 9.22266 128.772 9.50777 129.679 9.98314V12.5977L129.607 12.6451C128.605 12.1708 127.126 11.8135 125.933 11.8135C124.645 11.8135 123.404 12.0512 123.38 13.1447C123.356 14.2383 124.428 14.3806 125.91 14.7131L127.031 14.9766C129.035 15.4509 130.562 16.593 130.562 18.8766C130.562 21.8242 128.224 23.1312 125.051 23.1312C123.691 23.1312 121.973 22.7512 120.756 22.1567L120.754 19.5385Z'
                      fill='white'
                    />
                    <path
                      d='M132.421 19.5385L132.492 19.4911C133.876 20.1324 135.451 20.5129 136.692 20.5129C138.433 20.5129 139.389 20.0613 139.389 19.0157C139.389 17.851 138.483 17.6607 137.29 17.3756L135.855 17.0425C133.493 16.496 132.133 15.5453 132.133 13.2159C132.133 10.3399 134.734 9.22266 137.597 9.22266C139.147 9.22266 140.436 9.50777 141.342 9.98314V12.5977L141.271 12.6451C140.266 12.1708 138.79 11.8135 137.597 11.8135C136.308 11.8135 135.068 12.0512 135.044 13.1447C135.02 14.2383 136.093 14.3806 137.573 14.7131L138.694 14.9766C140.698 15.4509 142.225 16.593 142.225 18.8766C142.225 21.8242 139.887 23.1312 136.714 23.1312C135.354 23.1312 133.636 22.7512 132.419 22.1567L132.421 19.5385Z'
                      fill='white'
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect
                      width='142.227'
                      height='23.8681'
                      fill='white'
                      transform='translate(0 4.13184)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='grab-navbar'>
              <div className='link-group'>
                <Link className='grab-link' to='/grab'>
                  Trang chủ
                </Link>
                <Link className='grab-link' to='/grab-order'>
                  Đơn hàng
                </Link>
              </div>
              <Link className='user-info' to='/grab-profile'>
                Nguyên
              </Link>
            </div>
          </div>
          <div className='app-content'>
            <div className='app-content-page'>
              <div className='new-booking-page'>
                <Link className='back-link' to='/grab'>
                  {'<'} Quay lại kiểm tra tập tin
                </Link>
                <div className='header-2'>
                  <div className='left-header-2'>
                    <h1>Bước 3: Thiết lập giao hàng</h1>
                  </div>
                  <div className='right-header-2'>
                    <div
                      className='step-circle'
                      style={{ backgroundColor: '#fff' }}
                    ></div>
                    <div
                      className='step-circle'
                      style={{ backgroundColor: '#fff' }}
                    ></div>
                    <div
                      className='step-circle'
                      style={{ backgroundColor: '#fff' }}
                    ></div>
                    <div className='step-circle'></div>
                  </div>
                </div>

                <div className='header-3'>
                  <div className='header-3-title'>Thông tin người gửi</div>

                  <div className='header-3-sender-slider-wrapper'>
                    <div
                      class='slider-btn slider-btn-left'
                      onClick={scrollLeft}
                    >
                      <LeftIcon />
                    </div>
                    <div className='header-3-sender-slider'>
                      <div
                        className='header-3-sender-slider-content'
                        ref={sliderRef}
                      >
                        <div className='header-3-sender-slider-item'>
                          <div className='header-3-sender-slider-item-content'>
                            <div className='header-3-sender-slider-item-icon'>
                              <img
                                src='https://express.grab.com/book/static/images/pick-up-with-shadow.kWKyKop.svg'
                                alt=''
                              />
                            </div>
                            <div className='header-3-sender-slider-item-text'>
                              <div className='sender-name'>Khôi Nguyên</div>
                              <div className='sender-info'>
                                0846920011 • 123 Nguyen Van Linh, District 7,
                                Tp.HCM
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='header-3-sender-slider-item'>
                          <div className='header-3-sender-slider-item-content'>
                            <div className='header-3-sender-slider-item-icon'>
                              <img
                                src='https://express.grab.com/book/static/images/pick-up-with-shadow.kWKyKop.svg'
                                alt=''
                              />
                            </div>
                            <div className='header-3-sender-slider-item-text'>
                              <div className='sender-name'>Khôi Nguyên</div>
                              <div className='sender-info'>
                                0846920011 • 123 Nguyen Van Linh, District 7,
                                Tp.HCM
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='header-3-sender-slider-item'>
                          <div className='header-3-sender-slider-item-content'>
                            <div className='header-3-sender-slider-item-icon'>
                              <img
                                src='https://express.grab.com/book/static/images/pick-up-with-shadow.kWKyKop.svg'
                                alt=''
                              />
                            </div>
                            <div className='header-3-sender-slider-item-text'>
                              <div className='sender-name'>Khôi Nguyên</div>
                              <div className='sender-info'>
                                0846920011 • 123 Nguyen Van Linh, District 7,
                                Tp.HCM
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='header-3-sender-slider-item'>
                          <div className='header-3-sender-slider-item-content'>
                            <div className='header-3-sender-slider-item-icon'>
                              <img
                                src='https://express.grab.com/book/static/images/pick-up-with-shadow.kWKyKop.svg'
                                alt=''
                              />
                            </div>
                            <div className='header-3-sender-slider-item-text'>
                              <div className='sender-name'>Khôi Nguyên</div>
                              <div className='sender-info'>
                                0846920011 • 123 Nguyen Van Linh, District 7,
                                Tp.HCM
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='header-3-sender-slider-item'>
                          <div className='header-3-sender-slider-item-content'>
                            <div className='header-3-sender-slider-item-icon'>
                              <img
                                src='https://express.grab.com/book/static/images/pick-up-with-shadow.kWKyKop.svg'
                                alt=''
                              />
                            </div>
                            <div className='header-3-sender-slider-item-text'>
                              <div className='sender-name'>Khôi Nguyên</div>
                              <div className='sender-info'>
                                0846920011 • 123 Nguyen Van Linh, District 7,
                                Tp.HCM
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='header-3-sender-slider-item'>
                          <div className='header-3-sender-slider-item-content'>
                            <div className='header-3-sender-slider-item-icon'>
                              <img
                                src='https://express.grab.com/book/static/images/pick-up-with-shadow.kWKyKop.svg'
                                alt=''
                              />
                            </div>
                            <div className='header-3-sender-slider-item-text'>
                              <div className='sender-name'>Khôi Nguyên</div>
                              <div className='sender-info'>
                                0846920011 • 123 Nguyen Van Linh, District 7,
                                Tp.HCM
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='header-3-sender-slider-item'>
                          <div className='header-3-sender-slider-item-content'>
                            <div className='header-3-sender-slider-item-icon'>
                              <img
                                src='https://express.grab.com/book/static/images/pick-up-with-shadow.kWKyKop.svg'
                                alt=''
                              />
                            </div>
                            <div className='header-3-sender-slider-item-text'>
                              <div className='sender-name'>Khôi Nguyên</div>
                              <div className='sender-info'>
                                0846920011 • 123 Nguyen Van Linh, District 7,
                                Tp.HCM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class='slider-btn slider-btn-right'
                      onClick={scrollRight}
                    >
                      <RightIcon />
                    </div>
                  </div>

                  <div className='header-3-title'>3 đơn giao hàng</div>
                  <div className='header-3-tab-container'>
                    <div className='header-3-tab-title'>
                      Đã chọn 1 đơn giao hàng
                    </div>
                    <div className='header-3-tab-content'>
                      <div className='header-3-tab' onClick={openModal1}>
                        <div className='header-3-tab-text'>
                          Chỉnh sửa tùy chọn giao hàng
                        </div>
                        <RightIcon />
                      </div>
                      <div className='header-3-tab' onClick={openModal5}>
                        <div className='header-3-tab-text'>
                          Chỉnh sửa loại phương tiện
                        </div>
                        <RightIcon />
                      </div>
                      <div className='header-3-tab' onClick={openModal6}>
                        <div className='header-3-tab-text'>
                          Chỉnh sửa đảm bảo hàng hóa
                        </div>
                        <RightIcon />
                      </div>
                    </div>
                  </div>
                  <div className='header-3-upload-container'>
                    <Link className='header-3-upload-content' to='/upload-2'>
                      <div className='upload-drag-container'>
                        <div className='upload-btn-group'>
                          <img src='https://express.grab.com/book/static/images/upload-round.26H3m-5.svg' />
                          <p className='first-line'>Chọn tệp XLS</p>
                          <p className='second-line'>
                            Hoặc kéo và thả tập tin tại đây
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='header-3-download-template'>
                    <div className='header-3-download-template-content'>
                      <div className='download-template-btn'>
                        <img src='https://express.grab.com/book/static/images/excel.3uIJHS_.svg' />
                        <p>Tải về mẫu XLSX</p>
                      </div>
                      <div className='help-btn'>
                        <img
                          src='https://express.grab.com/book/static/images/help.aQX20Fc.svg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>

                  <div className='header-3-menu-container'>
                    <div className='header-3-menu-content'>
                      <div className='order-type-select'>
                        <div className='select-content'>
                          <div className='select-content-text'>Tất cả đơn</div>
                          <div className='select-content-icon'>
                            <DownIcon />
                          </div>
                        </div>
                      </div>
                      <div className='order-status-select'>
                        <div className='select-content'>
                          <div className='select-content-text'>
                            Tất cả tình trạng
                          </div>
                          <div className='select-content-icon'>
                            <DownIcon />
                          </div>
                        </div>
                      </div>
                      <div className='order-date-select'>
                        <div className='order-date-select-content'>
                          <input
                            type='text'
                            className='start-date'
                            readOnly
                            value='2024-12-01'
                          />
                          <span>~</span>
                          <input
                            type='text'
                            className='end-date'
                            readOnly
                            value='2024-12-18'
                          />
                          <div className='order-date-select-content-icon'>
                            <CalendarIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='header-3-order-list-container'>
                    <div className='header-3-order-list-content'>
                      <div className='order-table'>
                        <table>
                          <thead>
                            <tr>
                              <th>
                                <input
                                  type='checkbox'
                                  checked={selectAll}
                                  onChange={handleSelectAll}
                                  style={{ textAlign: 'center' }}
                                />
                              </th>
                              {/* <th>Đã đặt vào</th> */}
                              {/* <th>Người gửi</th>
                              <th>Địa chỉ người gửi</th> */}
                              <th>Người nhận</th>
                              <th style={{ paddingRight: '0' }}>
                                Địa chỉ người nhận
                              </th>
                              {/* <th>Size</th>
                              <th>Khối lượng</th> */}
                              <th>Item</th>
                              <th>Loại dịch vụ</th>
                              <th>Loại phương tiện</th>
                              <th style={{ width: '100px' }}>
                                Đảm bảo hàng hóa
                              </th>
                              <th>Giá</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map(order => (
                              <React.Fragment key={order.id}>
                                <tr onClick={() => handleToggleRow(order.id)}>
                                  {/* <td style={{ textAlign: 'center' }}>
                                    <DownIcon />
                                  </td> */}
                                  <td>
                                    <input type='checkbox' />
                                  </td>
                                  {/* <td>{order.orderDate}</td>  */}
                                  {/* <td>
                                    <span>{order.sender}</span>
                                  </td>
                                  <td>
                                    <span>{order.senderAdress}</span>
                                  </td> */}
                                  <td>
                                    <span
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        width: 'fit-content'
                                      }}
                                    >
                                      <DestinationIcon />
                                      {order.receiver}
                                    </span>
                                  </td>
                                  <td style={{ paddingRight: '0' }}>
                                    <span>{order.receiverAdress}</span>
                                  </td>
                                  <td>
                                    {order.size}
                                    {' • '}
                                    {order.weight}
                                  </td>
                                  <td
                                    onClick={openModal1}
                                    style={{
                                      cursor: 'pointer',
                                      paddingRight: '0'
                                    }}
                                  >
                                    {/* {order.deliveryType} */}
                                    <div className='modal-service-btn'>
                                      <div className='modal-service-btn-content'>
                                        <div className='modal-service-icon'>
                                          <img src={Fast} alt='' />
                                        </div>
                                        <div className='modal-service-text-group'>
                                          <div className='modal-service-text'>
                                            <div className='modal-service-text-left'>
                                              Siêu tốc
                                            </div>
                                            <div className='modal-service-text-sub'>
                                              Giao nhanh 30 phút/5km
                                            </div>
                                          </div>
                                        </div>
                                        <div className='modal-service-icon-right'>
                                          <RightIcon />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    onClick={openModal5}
                                    style={{
                                      cursor: 'pointer',
                                      paddingRight: '0'
                                    }}
                                  >
                                    {/* {order.vehicleType} */}
                                    <div className='modal-service-btn'>
                                      <div className='modal-service-btn-content'>
                                        <div className='modal-service-icon'>
                                          <img src={Bike} alt='' />
                                        </div>
                                        <div className='modal-service-text-group'>
                                          <div className='modal-service-text'>
                                            <div className='modal-service-text-left'>
                                              Xe máy
                                            </div>
                                            <div className='modal-service-text-sub'>
                                              Hàng hóa tối đa 30kg (50x40x50cm)
                                            </div>
                                          </div>
                                        </div>
                                        <div className='modal-service-icon-right'>
                                          <RightIcon />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    style={{ cursor: 'pointer' }}
                                    onClick={openModal6}
                                  >
                                    <span
                                      className='ensure'
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '78px'
                                      }}
                                    >
                                      Cơ bản {<RightIcon />}
                                    </span>
                                  </td>
                                  <td>
                                    <span
                                      style={{
                                        display: 'flex',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        margin: 0,
                                        padding: 0,
                                        width: 'fit-content'
                                      }}
                                    >
                                      {order.price}
                                      <span
                                        style={{
                                          fontSize: '16px',
                                          fontWeight: 600,
                                          textDecoration: 'underline',
                                          width: 'fit-content'
                                        }}
                                      >
                                        đ
                                      </span>
                                    </span>
                                  </td>
                                </tr>
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className='header-3-pagination'
                    style={{ display: 'none' }}
                  >
                    <div className='pagination-container'>
                      <div className='pagination-btn'>
                        <div className='pagination-content'>
                          <LeftIcon />
                        </div>
                      </div>
                      <div className='pagination-btn-number'>
                        <div className='pagination-content-number'>1</div>
                      </div>
                      <div className='pagination-btn'>
                        <div className='pagination-content'>
                          <RightIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='modal-1'>
                    <div
                      className={`modal-background ${
                        isModalOpen1 ? 'open-1' : ''
                      }`}
                      onClick={handleOutsideClick1} // Sự kiện click ngoài modal
                    >
                      <div
                        className={`modal-container-col ${
                          isModalOpen1 ? 'open-1' : ''
                        }`}
                      >
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <div className='modal-header-content'>
                              <div
                                className='modal-header-icon'
                                onClick={closeModal1}
                              >
                                <CrossIcon />
                              </div>
                              <div className='modal-header-text'>
                                Tùy chọn giao hàng
                              </div>
                            </div>
                          </div>
                          <div className='modal-body'>
                            <div className='modal-body-content'>
                              <div className='modal-body-content-title'>
                                Loại giao hàng
                              </div>
                              <div className='modal-body-content-btn-list'>
                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Fast} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Siêu tốc
                                        </div>
                                        <div className='modal-service-text-right'>
                                          69.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Giao nhanh 30 phút/5km
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={TwoHours} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          2H
                                        </div>
                                        <div className='modal-service-text-right'>
                                          43.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Giao nhanh 2 giờ, giá tốt hơn
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Cheap} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Siêu rẻ
                                        </div>
                                        <div className='modal-service-text-right'>
                                          84.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Giao nội thành trong 4H, đồng giá
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Food} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Thực phẩm
                                        </div>
                                        <div className='modal-service-text-right'>
                                          63.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Giao siêu tốc dành riêng cho thực phẩm
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='modal-footer'>
                            <div
                              className='modal-submit-btn'
                              onClick={closeModal1}
                            >
                              Xác nhận
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='modal-4'>
                    <div
                      className={`modal-background ${
                        isModalOpen4 ? 'open-4' : ''
                      }`}
                      onClick={handleOutsideClick4} // Sự kiện click ngoài modal
                    >
                      <div
                        className={`modal-container-col ${
                          isModalOpen4 ? 'open-4' : ''
                        }`}
                      >
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <div className='modal-header-content'>
                              <div
                                className='modal-header-icon'
                                onClick={closeModal4}
                              >
                                <CrossIcon />
                              </div>
                              <div className='modal-header-text'>Ưu đãi</div>
                            </div>
                          </div>
                          <div className='modal-body'>
                            <div className='modal-body-content'>
                              <div className='modal-body-content-title'>
                                <input
                                  type='text'
                                  className='voucher-input'
                                  placeholder='Nhập mã khuyến mãi'
                                />
                              </div>
                              <div className='modal-body-content-btn-list'>
                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Cheap} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Giảm 40% | Tối đa 15K
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Hạn sử dụng 27 Dec 2024
                                      </div>
                                    </div>
                                    <div className='modal-service-text-right'>
                                      <BookmarkIcon />
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Cheap} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Giảm 30% | Tối đa 200K
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Hạn sử dụng 31 Dec 2024
                                      </div>
                                    </div>
                                    <div className='modal-service-text-right'>
                                      <BookmarkIcon />
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Cheap} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Đồng giá 60K chuyến từ 61K
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Hạn sử dụng 31 Dec 2024
                                      </div>
                                    </div>
                                    <div className='modal-service-text-right'>
                                      <BookmarkIcon />
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Cheap} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Giảm 15% | Tối đa 10K
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Hạn sử dụng 02 Mar 2025
                                      </div>
                                    </div>
                                    <div className='modal-service-text-right'>
                                      <BookmarkIcon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='modal-footer'>
                            <div
                              className='modal-submit-btn'
                              onClick={closeModal1}
                            >
                              Xác nhận
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='modal-5'>
                    <div
                      className={`modal-background ${
                        isModalOpen5 ? 'open-5' : ''
                      }`}
                      onClick={handleOutsideClick5} // Sự kiện click ngoài modal
                    >
                      <div
                        className={`modal-container-col ${
                          isModalOpen5 ? 'open-5' : ''
                        }`}
                      >
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <div className='modal-header-content'>
                              <div
                                className='modal-header-icon'
                                onClick={closeModal5}
                              >
                                <CrossIcon />
                              </div>
                              <div className='modal-header-text'>
                                Tùy chọn phương tiện
                              </div>
                            </div>
                          </div>
                          <div className='modal-body'>
                            <div className='modal-body-content'>
                              <div className='modal-body-content-title'>
                                Loại phương tiện
                              </div>
                              <div className='modal-body-content-btn-list'>
                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Bike} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Xe máy
                                        </div>
                                        <div className='modal-service-text-right'>
                                          205.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Hàng hóa tối đa 30kg (50x40x50cm)
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={Van} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Xe tải/ Van 500kg
                                        </div>
                                        <div className='modal-service-text-right'>
                                          462.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Lên tới 500kg (160x120x120cm)
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={BoxTruck} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Xe tải/ Van 1000kg
                                        </div>
                                        <div className='modal-service-text-right'>
                                          571.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Lên tới 1000kg (200x150x150cm)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='modal-footer'>
                            <div
                              className='modal-submit-btn'
                              onClick={closeModal5}
                            >
                              Xác nhận
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='modal-6'>
                    <div
                      className={`modal-background ${
                        isModalOpen6 ? 'open-6' : ''
                      }`}
                      onClick={handleOutsideClick6} // Sự kiện click ngoài modal
                    >
                      <div
                        className={`modal-container-col ${
                          isModalOpen6 ? 'open-6' : ''
                        }`}
                      >
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <div className='modal-header-content'>
                              <div
                                className='modal-header-icon'
                                onClick={closeModal6}
                              >
                                <CrossIcon />
                              </div>
                              <div className='modal-header-text'>
                                Tùy chọn đảm bảo hàng hóa
                              </div>
                            </div>
                          </div>
                          <div className='modal-body'>
                            <div className='modal-body-content'>
                              <div className='modal-body-content-title'>
                                Loại bảo hiểm
                              </div>
                              <div className='modal-body-content-btn-list'>
                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={GrabPackage} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Cơ bản
                                        </div>
                                        <div className='modal-service-text-right'>
                                          Mặc định
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Bồi thường lên đến 3.000.000 VNĐ
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={GrabPackage} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Tiêu chuẩn
                                        </div>
                                        <div className='modal-service-text-right'>
                                          4.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Bồi thường lên đến 15.000.000 VNĐ
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='modal-service-btn'>
                                  <div className='modal-service-btn-content'>
                                    <div className='modal-service-icon'>
                                      <img src={GrabPackage} alt='' />
                                    </div>
                                    <div className='modal-service-text-group'>
                                      <div className='modal-service-text'>
                                        <div className='modal-service-text-left'>
                                          Nâng cao
                                        </div>
                                        <div className='modal-service-text-right'>
                                          10.000 <span>đ</span>
                                        </div>
                                      </div>
                                      <div className='modal-service-text-sub'>
                                        Bồi thường lên đến 30.000.000 VNĐ
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='modal-footer'>
                            <div
                              className='modal-submit-btn'
                              onClick={closeModal6}
                            >
                              Xác nhận
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='floating-footer'
            style={
              isModalOpen1 || isModalOpen4 || isModalOpen5
                ? { display: 'none' }
                : { display: 'flex' }
            }
          >
            <div className='floating-footer-content-wrapper'>
              <div className='check-upload-btn-wrapper'>
                <div className='total-price-text'>
                  <span
                    style={{
                      fontSize: '14px',
                      alignSelf: 'center',
                      marginRight: '20px',
                      lineHeight: '28px',
                      marginTop: '8px'
                    }}
                  >
                    Tổng
                  </span>
                  1.024.000
                  <span style={{ textDecoration: 'underline' }}>đ</span>
                </div>
                <Link to='/upload-4' className='check-upload-btn'>
                  Đến thanh toán
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload_3
