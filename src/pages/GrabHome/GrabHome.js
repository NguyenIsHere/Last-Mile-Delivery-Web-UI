import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './GrabHome.css'
import { ReactComponent as Dot } from '../../assets/icons/dot-circle (1).svg'
import { ReactComponent as Destination } from '../../assets/icons/marker.svg'
import { ReactComponent as Exchange } from '../../assets/icons/exchange.svg'
import { ReactComponent as Right } from '../../assets/icons/angle-small-right (1).svg'
import { ReactComponent as Boxes } from '../../assets/icons/boxes (1).svg'
import { ReactComponent as Upload } from '../../assets/icons/upload.svg'
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'

import Fast from '../../assets/images/Instant_36x36.png'
import TwoHours from '../../assets/images/UpfrontBatchV2_36x36.png'
import Cheap from '../../assets/images/SameDay_36x36.png'
import Food from '../../assets/images/Food_36x36.png'

const DotIcon = () => {
  return (
    <Dot
      style={{ fill: 'var(--blue-color-100)', width: '16px', height: '16px' }}
    />
  )
}

const DestinationIcon = () => {
  return (
    <Destination
      style={{
        fill: 'var(--orange-color-100)',
        width: '16px',
        height: '16px'
      }}
    />
  )
}

const ExchangeIcon = () => {
  return (
    <Exchange
      style={{ fill: 'var(--blue-color-30)', width: '20px', height: '20px' }}
    />
  )
}

const RightIcon = () => {
  return <Right style={{ fill: '#fff', width: '14px', height: '14px' }} />
}

const BoxesIcon = () => {
  return (
    <Boxes style={{ fill: '#ffffffc4', width: '17px', height: '15.5px' }} />
  )
}

const UploadIcon = () => {
  return (
    <Upload style={{ fill: '#ffffffc4', width: '15.5px', height: '15.5px' }} />
  )
}

const CrossIcon = () => {
  return (
    <Cross
      style={{ fill: 'var(--font-color-100)', width: '20px', height: '20px' }}
    />
  )
}

const GrabHome = () => {
  const [selectedLocation, setSelectedLocation] = useState('Ho Chi Minh') // Giá trị mặc định
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null) // Tạo tham chiếu đến dropdown

  const locations = [
    'Ho Chi Minh',
    'Ha Noi',
    'Da Nang',
    'Can Tho',
    'Hai Phong',
    'Vung Tau',
    'Nha Trang',
    'Da Lat',
    'Hue',
    'Quang Ninh',
    'Phu Quoc',
    'Phan Thiet',
    'Buon Ma Thuot',
    'Bac Lieu',
    'Ca Mau',
    'Bac Ninh',
    'Bac Giang',
    'Binh Duong',
    'Binh Phuoc',
    'Binh Thuan',
    'Binh Dinh',
    'Binh Thuan',
    'Ben Tre',
    'Dong Nai',
    'Dong Thap',
    'Dong Nai',
    'Dong Thap',
    'Gia Lai',
    'Ha Giang',
    'Ha Nam',
    'Ha Tinh',
    'Hai Duong',
    'Hau Giang',
    'Hoa Binh',
    'Hung Yen',
    'Khanh Hoa',
    'Kien Giang',
    'Kon Tum',
    'Lai Chau',
    'Lam Dong',
    'Lang Son',
    'Lao Cai',
    'Long An',
    'Nam Dinh',
    'Nghe An',
    'Ninh Binh',
    'Ninh Thuan',
    'Phu Tho',
    'Quang Binh',
    'Quang Nam',
    'Quang Ngai',
    'Quang Tri',
    'Soc Trang',
    'Son La',
    'Tay Ninh',
    'Thai Binh',
    'Thai Nguyen',
    'Thanh Hoa',
    'Thua Thien Hue',
    'Tien Giang',
    'Tra Vinh',
    'Tuyen Quang',
    'Vinh Long',
    'Vinh Phuc',
    'Yen Bai'
  ]

  const handleSelect = location => {
    setSelectedLocation(location) // Cập nhật giá trị chọn
    setShowDropdown(false) // Đóng dropdown
  }

  // Xử lý click bên ngoài dropdown
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false) // Ẩn dropdown
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className='grabhome__container'>
      <div className='grab-header-group'>
        <div className='header-1'>
          <div className='grab-logo'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='154'
              height='30'
              viewBox='0 0 154 30'
              fill='none'
            >
              <g opacity='0.8'>
                <g clip-path='url(#clip0)'>
                  <path
                    d='M3.31302 15.2652C3.31302 19.4095 6.45216 22.5878 10.51 22.5878C14.4144 22.5878 16.3799 20.0704 16.3799 17.299V16.3075H10.6885V17.8311H14.8234C14.8489 19.3317 13.4707 21.0861 10.5106 21.0861C7.24402 21.0861 4.97265 18.6703 4.97265 15.2635C4.97265 11.9836 7.42244 9.51699 10.791 9.51699C12.9859 9.51699 14.7214 10.0508 16.3295 11.1699L16.4314 11.0937V9.67105C15.2318 8.83247 13.1904 8.01872 10.74 8.01872C6.5796 8.01872 3.31302 11.2224 3.31302 15.2652ZM0.939697 15.2652C0.939697 20.7571 5.02306 24.8507 10.5123 24.8507C15.5144 24.8507 18.5771 21.7232 18.5771 16.6635V14.0677H10.6885V15.5445H17.1457V16.9175C17.1457 20.8841 14.6704 23.3507 10.5106 23.3507C5.94237 23.3507 2.54778 19.8672 2.54778 15.2652C2.54778 10.7901 6.1208 7.25576 10.74 7.25576C12.9349 7.25576 14.9259 7.78961 16.4314 8.83247V7.33194C14.9769 6.28964 13.0623 5.7558 10.74 5.7558C5.20035 5.7558 0.939697 9.95096 0.939697 15.2652ZM21.8159 16.5631V24.4184H23.3215V16.5874C23.3215 14.8329 24.4696 13.5869 26.1796 13.5869C26.6894 13.5869 27.1494 13.7138 27.6342 13.9176C27.814 13.4735 28.0363 13.0477 28.2981 12.6462C27.7622 12.2901 26.9709 12.0615 26.2051 12.0615C23.6279 12.0615 21.8159 13.9176 21.8159 16.562V16.5631ZM19.5955 24.4196H21.1011V16.562C21.1011 13.4582 23.194 11.3493 26.2306 11.3493C27.2502 11.3493 28.2981 11.68 28.7574 11.9599C29.0407 11.6292 29.3443 11.2732 29.7527 10.9442C28.8084 10.2833 27.5323 9.90186 26.1542 9.90186C22.1473 9.90186 19.5955 12.5971 19.5955 16.5891V24.4196ZM43.2024 15.6212V17.8328C44.0951 16.6382 44.8609 15.5959 45.5758 14.7291C47.3883 12.5169 48.9698 11.2963 51.4202 11.2963C54.7377 11.2963 57.162 13.7883 57.162 17.2967C57.162 20.7295 54.7887 23.3485 51.5221 23.3485C48.8678 23.3485 46.571 21.5427 46.0351 19.0766L44.9635 20.528C45.8057 22.9439 48.2816 24.8507 51.4972 24.8507C55.6321 24.8507 58.6681 21.5455 58.6681 17.299C58.6681 13.0022 55.606 9.77319 51.4179 9.77319C47.0813 9.7715 45.0909 13.0022 43.2024 15.6212ZM47.8726 16.7397H47.8217L46.6474 18.3418C46.8514 20.1725 48.7149 22.6132 51.5221 22.6132C54.3803 22.6132 56.45 20.2995 56.45 17.2736C56.45 14.2477 54.3316 12.0107 51.4224 12.0107C48.5903 12.0107 46.9561 14.0699 45.8074 15.5959C45.2461 16.3329 44.2781 17.5281 43.2019 19.0281V21.4687C44.1971 19.9942 45.5497 18.2651 46.5438 17.0704C48.2283 15.0614 49.249 13.5361 51.3924 13.5361C53.4882 13.5361 54.9144 15.1382 54.9144 17.2736C54.9144 19.4857 53.5618 21.111 51.5204 21.111C49.3765 21.111 47.8709 19.1528 47.8709 16.9666L47.8726 16.7397ZM46.3665 4.43359V10.7647C46.8259 10.4086 47.3368 9.97466 47.8726 9.77319V4.43359H46.3665ZM44.1212 13.0784C44.5806 12.4938 45.0909 11.8578 45.6268 11.3239V4.43359H44.1212V13.0784ZM37.9964 20.3243L37.9709 20.2989C37.3331 20.8068 36.2864 21.1127 35.2912 21.1127C33.252 21.1127 31.7182 19.589 31.7182 17.3238C31.7182 15.163 33.2243 13.5101 35.2402 13.5101C37.4096 13.5101 38.7367 15.0863 38.7367 17.1968V24.4201H40.2423V17.1212C40.2423 14.1715 38.1748 12.0107 35.2657 12.0107C32.382 12.0107 30.1616 14.1715 30.1616 17.3244C30.1616 20.4518 32.3565 22.6894 35.2657 22.6132C36.3634 22.5878 37.4861 22.1809 37.9964 21.8231V20.3243ZM27.8897 17.299C27.8897 21.7232 31.0288 24.8507 35.2651 24.8507C36.2093 24.8507 37.3071 24.5685 37.9959 24.037V22.537C37.5365 22.9185 36.4138 23.3507 35.2651 23.3507C31.7946 23.3507 29.4462 20.9095 29.4462 17.299C29.4462 13.8668 31.9476 11.2986 35.2651 11.2986C38.5572 11.2986 40.9566 13.7138 40.9566 17.0958V24.4184H42.4859V17.0704C42.4859 12.8493 39.4997 9.7478 35.2634 9.7478C31.1053 9.7478 27.8897 13.0276 27.8897 17.299Z'
                    fill='#00B14F'
                  />
                  <path
                    d='M72.6578 21.644V24.3923div1.1888V6.06934H72.5553V8.81814div4.1773V13.704H71.7108V16.4523div4.1773V21.644H72.6578ZM87.4744 10.4705L82.291 17.4195L87.3741 24.2653V24.3923H83.7722L80.4264 19.7355L77.1054 24.3923H73.5041V24.2653L78.5362 17.4703L73.3251 10.4727V10.3452H76.927L80.4009 15.1809L83.8748 10.3452H87.4761L87.4744 10.4705ZM96.4166 24.7726C94.2964 24.7726 92.6107 23.5763 92.0234 22.3297H91.8954V29.9909H88.9579V17.3433C88.9579 12.7114 91.9208 9.88697 96.1101 9.88697C100.299 9.88697 103.313 12.7114 103.313 17.3433C103.313 22.0001 100.325 24.7743 96.4166 24.7743V24.7726ZM96.1334 12.6589C93.7068 12.6589 91.8931 14.5167 91.8931 17.5454C91.8931 20.2428 93.7323 21.9984 96.1334 21.9984C98.5344 21.9984 100.376 20.2676 100.376 17.446C100.376 14.5183 98.5622 12.6606 96.1356 12.6606L96.1334 12.6589Z'
                    fill='#00B14F'
                  />
                  <path
                    d='M114.759 11.1343C114.25 11.8724 113.89 12.4576 113.584 13.2979L113.482 13.374C112.772 12.9819 111.972 12.7802 111.16 12.7888C109.014 12.7888 108.12 14.3921 108.12 16.6567V24.5205H105.181L105.155 16.4022C105.129 12.2798 107.173 10.0146 111.259 10.0146C112.384 10.0146 113.916 10.4492 114.759 11.1343Z'
                    fill='#00B14F'
                  />
                  <path
                    d='M128.171 18.487H117.877C118.209 20.6252 120.199 21.9739 122.91 21.9739C124.698 21.9739 126.333 21.6178 127.789 20.676L127.865 20.7522V23.427C126.384 24.4197 124.672 24.7758 122.501 24.7758C117.698 24.7758 114.811 22.027 114.811 17.0897C114.811 12.7625 117.622 9.86133 121.785 9.86133C125.899 9.86133 128.274 12.5588 128.274 16.7585C128.281 17.3363 128.247 17.914 128.171 18.487ZM125.339 16.0181C125.339 14.0074 123.934 12.6321 121.635 12.6321C119.566 12.6321 118.033 13.9555 117.854 16.0181H125.339Z'
                    fill='#00B14F'
                  />
                  <path
                    d='M130.241 20.9308L130.317 20.88C131.799 21.5668 133.486 21.9742 134.814 21.9742C136.679 21.9742 137.703 21.4906 137.703 20.371C137.703 19.1238 136.732 18.9201 135.454 18.6148L133.922 18.2582C131.393 17.673 129.936 16.6549 129.936 14.1606C129.936 11.0811 132.721 9.88477 135.786 9.88477C137.447 9.88477 138.826 10.1901 139.797 10.6991V13.4987L139.721 13.5495C138.648 13.0416 137.064 12.659 135.786 12.659C134.407 12.659 133.078 12.9135 133.053 14.0844C133.027 15.2554 134.175 15.4078 135.761 15.7639L136.962 16.046C139.108 16.5539 140.743 17.7768 140.743 20.222C140.743 23.3782 138.24 24.7778 134.842 24.7778C133.386 24.7778 131.546 24.3709 130.243 23.7343L130.241 20.9308Z'
                    fill='#00B14F'
                  />
                  <path
                    d='M142.734 20.9308L142.81 20.88C144.292 21.5668 145.978 21.9742 147.307 21.9742C149.171 21.9742 150.195 21.4906 150.195 20.371C150.195 19.1238 149.225 18.9201 147.948 18.6148L146.41 18.2582C143.881 17.673 142.426 16.6549 142.426 14.1606C142.426 11.0811 145.21 9.88477 148.276 9.88477C149.936 9.88477 151.316 10.1901 152.287 10.6991V13.4987L152.21 13.5495C151.134 13.0416 149.553 12.659 148.276 12.659C146.896 12.659 145.568 12.9135 145.542 14.0844C145.517 15.2554 146.666 15.4078 148.25 15.7639L149.451 16.046C151.597 16.5539 153.232 17.7768 153.232 20.222C153.232 23.3782 150.728 24.7778 147.33 24.7778C145.874 24.7778 144.035 24.3709 142.732 23.7343L142.734 20.9308Z'
                    fill='#00B14F'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect
                    width='152.294'
                    height='25.5575'
                    fill='white'
                    transform='translate(0.939697 4.43359)'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='grab-navbar'>
            <div className='link-group'>
              <Link className='grab-link' to='/grab-home'>
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
        <div className='header-2'>
          <div className='left-header-2'>
            <h1>
              Giao tai <span>{selectedLocation}</span>
            </h1>
            <div className='dropdown-gps' ref={dropdownRef}>
              {/* Icon để mở dropdown */}
              <div
                className='icon-dropdown'
                onClick={() => setShowDropdown(prev => !prev)}
                style={{ cursor: 'pointer' }}
              >
                <div className='right-icon'>
                  <RightIcon />
                </div>
              </div>

              {/* Dropdown List */}
              {showDropdown && (
                <ul className='dropdown-list'>
                  {locations.map(location => (
                    <li
                      key={location}
                      className='dropdown-item'
                      onClick={() => handleSelect(location)}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className='right-header-2'>
            <Link className='right-header-2-item-group'>
              <div className='icon'>
                <BoxesIcon />
              </div>
              <div className='text'>Thêm đơn hàng</div>
            </Link>
            <Link className='right-header-2-item-group'>
              <div className='icon'>
                <UploadIcon />
              </div>
              <div className='text'>Upload đơn hàng</div>
            </Link>
          </div>
        </div>
        <div className='header-3'>
          <div className='send-location-col'>
            <div className='send-location'>
              <div className='send-location-icon'>
                <DotIcon />
              </div>
              <div className='send-location-text'>Điểm gửi hàng</div>
            </div>
          </div>
          <div className='swap-btn-col'>
            <div className='swap-btn'>
              <ExchangeIcon />
            </div>
          </div>
          <div className='receive-location-col'>
            <div className='receive-location'>
              <div className='receive-location-icon'>
                <DestinationIcon />
              </div>
              <div className='receive-location-text'>Điểm nhận hàng</div>
            </div>
          </div>

          <div className='service-type-btn-col'>
            <div className='service-type-btn' onClick={openModal}>
              <div className='service-type-btn-content'>
                <div className='service-type-icon'>
                  <img src={Fast} alt='' />
                </div>
                <div className='service-type-text-group'>
                  <div className='service-type-text'>
                    Lấy hàng hôm nay, đặt ngay
                  </div>
                  <div className='service-type-text-sub'>Giao vào 00:13</div>
                </div>
              </div>
            </div>
          </div>

          <div className='order-detail-btn-col'>
            <div className='order-detail-btn'>
              <div className='order-detail-btn-content'>
                <div className='order-detail-text-group'>
                  <div className='order-detail-text'>
                    Thêm chi tiết đơn hàng
                  </div>
                  <div className='order-detail-text-sub'>
                    29.000<span>đ</span>
                  </div>
                </div>
                <div className='order-detail-icon'>
                  <RightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-background ${isModalOpen ? 'open' : ''}`}
        onClick={closeModal}
      >
        <div className={`modal-container-col ${isModalOpen ? 'open' : ''}`}>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='modal-header-content'>
                <div className='modal-header-icon' onClick={closeModal}>
                  <CrossIcon />
                </div>
                <div className='modal-header-text'>Tùy chọn giao hàng</div>
              </div>
            </div>
            <div className='modal-body'>
              <div className='modal-body-content'>
                <div className='modal-body-content-title'>Loại giao hàng</div>
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
                          <div className='modal-service-text-left'>2H</div>
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
                          <div className='modal-service-text-left'>Siêu rẻ</div>
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
              <div className='modal-submit-btn'>Xác nhận</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal-background ${isModalOpen ? 'open-1' : ''}`}
        onClick={closeModal}
      >
        <div className={`modal-container-col ${isModalOpen ? 'open-1' : ''}`}>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='modal-header-content'>
                <div className='modal-header-icon' onClick={closeModal}>
                  <CrossIcon />
                </div>
                <div className='modal-header-text'>Tùy chọn giao hàng</div>
              </div>
            </div>
            <div className='modal-body'>
              <div className='modal-body-content'>
                <div className='modal-body-content-title'>Loại giao hàng</div>
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
                          <div className='modal-service-text-left'>2H</div>
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
                          <div className='modal-service-text-left'>Siêu rẻ</div>
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
              <div className='modal-submit-btn'>Xác nhận</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal-background ${isModalOpen ? 'open-2' : ''}`}
        onClick={closeModal}
      >
        <div className={`modal-container-col ${isModalOpen ? 'open-2' : ''}`}>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='modal-header-content'>
                <div className='modal-header-icon' onClick={closeModal}>
                  <CrossIcon />
                </div>
                <div className='modal-header-text'>Tùy chọn giao hàng</div>
              </div>
            </div>
            <div className='modal-body'>
              <div className='modal-body-content'>
                <div className='modal-body-content-title'>Loại giao hàng</div>
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
                          <div className='modal-service-text-left'>2H</div>
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
                          <div className='modal-service-text-left'>Siêu rẻ</div>
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
              <div className='modal-submit-btn'>Xác nhận</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrabHome
