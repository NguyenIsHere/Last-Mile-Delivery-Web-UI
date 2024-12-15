import React from 'react'
import './OrderTracking.css'

const OrderTracking = () => {
  return (
    <div className='order-tracking-container'>
      <h1 className='order-tracking-title'>Theo dõi trạng thái đơn hàng</h1>

      <div className='order-tracking-status'>
        <div className='status-step active'>
          <div className='status-circle'></div>
          <span>Đặt hàng</span>
        </div>
        <div className='status-step active'>
          <div className='status-circle'></div>
          <span>Đang xử lý</span>
        </div>
        <div className='status-step'>
          <div className='status-circle'></div>
          <span>Đang giao</span>
        </div>
        <div className='status-step'>
          <div className='status-circle'></div>
          <span>Hoàn thành</span>
        </div>
      </div>

      <div className='order-tracking-details'>
        <p>
          <strong>Thông tin đơn hàng:</strong>
        </p>
        <p>Mã đơn hàng: #123456789</p>
        <p>Ngày đặt: 15/12/2024</p>
        <p>Vị trí hiện tại: Quận 1, TP.HCM</p>
      </div>
    </div>
  )
}

export default OrderTracking
