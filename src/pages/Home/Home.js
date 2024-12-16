import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home__container'>
      <div className='home-header'>
        <div className='logo'>Grab</div>
        <div className='home-navbar'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/about' className='nav-link'>
            About
          </Link>
          <Link to='/service' className='nav-link'>
            Service
          </Link>
          <Link to='/main' className='get-started-btn'>
            Get Started
          </Link>
        </div>
      </div>
      <div className='hero'>
        <div className='left-hero'></div>
        <div className='right-hero'></div>
      </div>
      <div className='middle'>
        <div className='top-mid'></div>
        <div className='bottom-mid'>
          <div className='mid-item'>
            <div className='mid-icon'></div>
            <h2 className='mid-title'></h2>
            <p className='mid-description'></p>
          </div>
          <div className='mid-item'>
            <div className='mid-icon'></div>
            <h2 className='mid-title'></h2>
            <p className='mid-description'></p>
          </div>
          <div className='mid-item'>
            <div className='mid-icon'></div>
            <h2 className='mid-title'></h2>
            <p className='mid-description'></p>
          </div>
          <div className='mid-item'>
            <div className='mid-icon'></div>
            <h2 className='mid-title'></h2>
            <p className='mid-description'></p>
          </div>
        </div>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default Home
