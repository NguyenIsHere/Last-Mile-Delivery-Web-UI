import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Xử lý đăng nhập
    console.log('Submitted:', formData)
  }

  return (
    <div className='login__container'>
      <div className='login-container'>
        <div className='login-box'>
          <h1 className='login-title'>Đăng Nhập</h1>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Nhập email của bạn'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Mật khẩu</label>
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
            <button type='submit' className='login-button'>
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
