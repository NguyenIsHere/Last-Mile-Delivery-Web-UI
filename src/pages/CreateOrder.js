import React, { useState } from 'react'
import '../styles/create-order.css'

const CreateOrder = () => {
  const [sender, setSender] = useState({
    address: '',
    building: '',
    name: '',
    phone: '',
    note: ''
  })

  const [receiver, setReceiver] = useState({
    address: '',
    building: '',
    name: '',
    phone: '',
    note: ''
  })

  const [item, setItem] = useState({
    size: '',
    weight: '',
    image: null,
    category: '',
    insurance: ''
  })

  const [delivery, setDelivery] = useState({
    service: '',
    vehicle: ''
  })

  const handleDeliveryChange = e => {
    const { name, value } = e.target
    setDelivery(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSenderChange = e => {
    const { name, value } = e.target
    setSender(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleReceiverChange = e => {
    const { name, value } = e.target
    setReceiver(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleItemChange = e => {
    const { name, value, files } = e.target
    setItem(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Sender Info:', sender)
    console.log('Receiver Info:', receiver)
    console.log('Item Info:', item)
  }

  return (
    <div className='create-order-container'>
      <h1 className='create-order-title'>Tạo Đơn</h1>
      <form className='create-order-form' onSubmit={handleSubmit}>
        <div className='content-container'>
          <div className='part'>
            {/* Thông tin người gửi */}
            <section className='order-section'>
              <h2 className='section-title'>Thông Tin Người Gửi</h2>
              <div className='form-group'>
                <label className='form-label'>
                  Địa Chỉ<span style={{ color: 'red' }}>*</span>:
                </label>
                <input
                  type='text'
                  name='address'
                  value={sender.address}
                  onChange={handleSenderChange}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Số tầng, số tòa nhà:</label>
                <input
                  type='text'
                  name='building'
                  value={sender.building}
                  onChange={handleSenderChange}
                  className='form-input'
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>
                  Tên người liên lạc<span style={{ color: 'red' }}>*</span>:
                </label>
                <input
                  type='text'
                  name='name'
                  value={sender.name}
                  onChange={handleSenderChange}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>
                  Số điện thoại<span style={{ color: 'red' }}>*</span>:
                </label>
                <input
                  type='text'
                  name='phone'
                  value={sender.phone}
                  onChange={handleSenderChange}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Ghi chú cho tài xế:</label>
                <textarea
                  type='text'
                  name='note'
                  value={sender.note}
                  onChange={handleSenderChange}
                  className='form-input'
                />
              </div>
            </section>

            {/* Thông tin người nhận */}
            <section className='order-section'>
              <h2 className='section-title'>Thông Tin Người Nhận</h2>
              <div className='form-group'>
                <label className='form-label'>
                  Địa Chỉ<span style={{ color: 'red' }}>*</span>:
                </label>
                <input
                  type='text'
                  name='address'
                  value={receiver.address}
                  onChange={handleReceiverChange}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Số tầng, số tòa nhà:</label>
                <input
                  type='text'
                  name='building'
                  value={receiver.building}
                  onChange={handleReceiverChange}
                  className='form-input'
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>
                  Tên người liên lạc<span style={{ color: 'red' }}>*</span>:
                </label>
                <input
                  type='text'
                  name='name'
                  value={receiver.name}
                  onChange={handleReceiverChange}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>
                  Số điện thoại<span style={{ color: 'red' }}>*</span>:
                </label>
                <input
                  type='text'
                  name='phone'
                  value={receiver.phone}
                  onChange={handleReceiverChange}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Ghi chú cho tài xế:</label>
                <textarea
                  type='text'
                  name='note'
                  value={receiver.note}
                  onChange={handleReceiverChange}
                  className='form-input'
                />
              </div>
            </section>
          </div>

          <div className='part'>
            {/* Thông tin chi tiết món hàng */}
            <section className='order-section'>
              <h2 className='section-title'>Thông Tin Chi Tiết Món Hàng</h2>
              <div className='form-group'>
                <label className='form-label'>
                  Kích Cỡ<span style={{ color: 'red' }}>*</span>:
                </label>
                <select
                  name='size'
                  value={item.size}
                  onChange={handleItemChange}
                  className='form-input'
                  required
                >
                  <option value=''>Chọn kích cỡ</option>
                  <option value='small'>Nhỏ</option>
                  <option value='medium'>Vừa</option>
                  <option value='large'>Lớn</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>
                  Trọng Lượng<span style={{ color: 'red' }}>*</span>:
                </label>
                <input
                  type=''
                  name='weight'
                  value={item.weight}
                  onChange={handleItemChange}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Thêm Hình Ảnh:</label>
                <input
                  type='file'
                  name='image'
                  onChange={handleItemChange}
                  className='form-input'
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>
                  Loại Hàng Hóa<span style={{ color: 'red' }}>*</span>:
                </label>
                <select
                  name='category'
                  value={item.category}
                  onChange={handleItemChange}
                  className='form-input'
                  required
                >
                  <option value=''>Chọn loại hàng hóa</option>
                  <option value='food'>Thực Phẩm</option>
                  <option value='clothing'>Quần Áo</option>
                  <option value='electronics'>Điện Tử</option>
                  <option value='fragile'>Dễ Vỡ</option>
                  <option value='others'>Khác</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>Đảm Bảo Hàng Hóa:</label>
                <div className='radio-group'>
                  <label className='radio-label'>
                    <input
                      type='radio'
                      name='insurance'
                      value='basic'
                      checked={item.insurance === 'basic'}
                      onChange={handleItemChange}
                      required
                    />
                    Cơ Bản
                  </label>
                  <label className='radio-label'>
                    <input
                      type='radio'
                      name='insurance'
                      value='standard'
                      checked={item.insurance === 'standard'}
                      onChange={handleItemChange}
                      required
                    />
                    Mặc Định
                  </label>
                  <label className='radio-label'>
                    <input
                      type='radio'
                      name='insurance'
                      value='premium'
                      checked={item.insurance === 'premium'}
                      onChange={handleItemChange}
                      required
                    />
                    Nâng Cao
                  </label>
                </div>
              </div>
            </section>

            {/* Chọn dịch vụ giao hàng */}
            <section className='order-section'>
              <h2 className='section-title'>Chọn Dịch Vụ Giao Hàng</h2>
              <div className='form-group'>
                <label className='form-label'>Dịch Vụ:</label>
                <select
                  name='service'
                  value={delivery.service}
                  onChange={handleDeliveryChange}
                  className='form-input'
                  required
                >
                  <option value=''>Chọn dịch vụ giao hàng</option>
                  <option value='express'>Siêu Tốc</option>
                  <option value='economy'>Tiết Kiệm</option>
                  <option value='cheap'>Siêu Rẻ</option>
                </select>
              </div>
            </section>

            {/* Chọn phương tiện giao hàng */}
            <section className='order-section'>
              <h2 className='section-title'>Chọn Phương Tiện Giao Hàng</h2>
              <div className='form-group'>
                <label className='form-label'>Phương Tiện:</label>
                <select
                  name='vehicle'
                  value={delivery.vehicle}
                  onChange={handleDeliveryChange}
                  className='form-input'
                  required
                >
                  <option value=''>Chọn phương tiện</option>
                  <option value='motorbike'>Xe Máy</option>
                  <option value='van500'>Xe Tải/Van 500kg</option>
                  <option value='van1000'>Xe Tải/Van 1000kg</option>
                </select>
              </div>
            </section>
          </div>
        </div>

        <button type='submit' className='submit-button'>
          Tạo Đơn
        </button>
      </form>
    </div>
  )
}

export default CreateOrder
