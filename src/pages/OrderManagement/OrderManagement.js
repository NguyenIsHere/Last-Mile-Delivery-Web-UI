import React, { useState } from 'react'
import './OrderManagement.css'

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      sender: 'Nguyen Van A',
      receiver: 'Tran Thi B',
      size: 'Medium',
      status: 'saved',
      createdDate: '2024-12-01',
      totalFee: 100000
    },
    {
      id: 2,
      sender: 'Le Hoang C',
      receiver: 'Pham Van D',
      size: 'Large',
      status: 'shipping',
      createdDate: '2024-12-02',
      totalFee: 150000
    },
    {
      id: 3,
      sender: 'Tran Minh E',
      receiver: 'Nguyen Thi F',
      size: 'Small',
      status: 'delivered',
      createdDate: '2024-12-03',
      totalFee: 50000
    },
    {
      id: 4,
      sender: 'Bui Van G',
      receiver: 'Do Thi H',
      size: 'Large',
      status: 'canceled',
      createdDate: '2024-12-04',
      totalFee: 75000
    },
    {
      id: 5,
      sender: 'Pham Thi I',
      receiver: 'Vo Van K',
      size: 'Medium',
      status: 'saved',
      createdDate: '2024-12-05',
      totalFee: 125000
    }
  ])

  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedOrders, setSelectedOrders] = useState([])

  // Lọc danh sách đơn theo trạng thái
  const filteredOrders = selectedStatus
    ? orders.filter(order => order.status === selectedStatus)
    : orders

  return (
    <div className='order-management-container'>
      <h2>Quản lý đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                id='selectAll'
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedOrders(filteredOrders.map(order => order.id))
                  } else {
                    setSelectedOrders([])
                  }
                }}
                checked={selectedOrders.length === filteredOrders.length}
              />
              <label
                htmlFor='selectAll'
                style={{ marginLeft: '5px', cursor: 'pointer' }}
              >
                Chọn tất cả
              </label>
            </th>
            <th>Mã đơn hàng</th>
            <th>Người gửi</th>
            <th>Người nhận</th>
            <th>Kích cỡ</th>
            <th>
              <select
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
                style={{
                  padding: '5px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  background: '#fff',
                  cursor: 'pointer'
                }}
              >
                <option value=''>Tất cả trạng thái</option>
                <option value='saved'>Đã lưu</option>
                <option value='delivered'>Đã giao</option>
                <option value='shipping'>Đang giao</option>
                <option value='canceled'>Đã hủy</option>
              </select>
            </th>
            <th>Ngày tạo</th>
            <th>Tổng cước</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>
                <input
                  type='checkbox'
                  checked={selectedOrders.includes(order.id)}
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedOrders([...selectedOrders, order.id])
                    } else {
                      setSelectedOrders(
                        selectedOrders.filter(id => id !== order.id)
                      )
                    }
                  }}
                />
              </td>
              <td>{order.id}</td>
              <td>{order.sender}</td>
              <td>{order.receiver}</td>
              <td>{order.size}</td>
              <td>{order.status}</td>
              <td>{order.createdDate}</td>
              <td>{order.totalFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderManagement
