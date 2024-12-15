import React from 'react'
import './OrderTracking.css'

const OrderTracking = () => {
  const orderSteps = [
    { id: 1, label: 'Đơn hàng đã được tạo', completed: true },
    { id: 2, label: 'Đơn hàng đang được xử lý', completed: true },
    { id: 3, label: 'Đang vận chuyển', completed: false },
    { id: 4, label: 'Giao hàng thành công', completed: false }
  ]

  return (
    <div className='order-tracking-container'>
      <h2 className='tracking-title'>Theo dõi trạng thái đơn hàng</h2>
      <div className='tracking-timeline'>
        {orderSteps.map((step, index) => (
          <div
            key={step.id}
            className={`timeline-step ${step.completed ? 'completed' : ''}`}
          >
            <div className='step-marker'></div>
            <p className='step-label'>{step.label}</p>
            {index < orderSteps.length - 1 && <div className='step-line'></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderTracking
