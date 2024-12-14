import React, { useState } from 'react'
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    contact: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu và Nhập lại mật khẩu không khớp!')
      return
    }
    // Xử lý đăng ký
    console.log('Submitted:', formData)
  }

  return (
    <div className='register__container'>
      <div className='register-container'>
        <div className='register-box'>
          <h1 className='register-title'>Đăng Ký</h1>
          <form onSubmit={handleSubmit} className='register-form'>
            <div className='form-group'>
              <label htmlFor='fullname'>Họ Tên</label>
              <input
                type='text'
                id='fullname'
                name='fullname'
                placeholder='Nhập họ tên của bạn'
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='contact'>Số Điện Thoại/Email</label>
              <input
                type='text'
                id='contact'
                name='contact'
                placeholder='Nhập số điện thoại hoặc email'
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Mật Khẩu</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Nhập mật khẩu'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='confirmPassword'>Nhập Lại Mật Khẩu</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Nhập lại mật khẩu'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='register-button'>
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
