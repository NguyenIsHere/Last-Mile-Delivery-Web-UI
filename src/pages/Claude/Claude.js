import React, { useState } from 'react'
import {
  Truck,
  Package,
  Clock,
  MapPin,
  ChevronRight,
  Search,
  User,
  Phone,
  Calendar,
  DollarSign,
  Shield
} from 'lucide-react'

const DeliveryWebsite = () => {
  const [selectedService, setSelectedService] = useState('express')

  const services = [
    {
      id: 'express',
      title: 'Express Delivery',
      description: 'Same-day delivery within 4 hours',
      icon: <Truck className='w-6 h-6' />,
      price: 'From $5.99'
    },
    {
      id: 'scheduled',
      title: 'Scheduled Delivery',
      description: 'Book in advance for specific time slots',
      icon: <Calendar className='w-6 h-6' />,
      price: 'From $4.99'
    },
    {
      id: 'bulk',
      title: 'Bulk Delivery',
      description: 'Multiple packages at discounted rates',
      icon: <Package className='w-6 h-6' />,
      price: 'From $3.99/item'
    }
  ]

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <h1 className='text-2xl font-bold text-blue-600'>DeliverEase</h1>
            <nav className='hidden md:flex space-x-6'>
              <a href='#' className='text-gray-600 hover:text-blue-600'>
                Services
              </a>
              <a href='#' className='text-gray-600 hover:text-blue-600'>
                Pricing
              </a>
              <a href='#' className='text-gray-600 hover:text-blue-600'>
                Track
              </a>
              <a href='#' className='text-gray-600 hover:text-blue-600'>
                Business
              </a>
            </nav>
          </div>
          <div className='flex items-center space-x-4'>
            <button className='p-2 text-gray-600 hover:text-blue-600'>
              <User className='w-6 h-6' />
            </button>
            <button className='hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
        <div className='max-w-7xl mx-auto px-4 py-16'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl font-bold mb-4'>
              Fast & Reliable Last Mile Delivery
            </h2>
            <p className='text-xl mb-8 text-blue-100'>
              Get your packages delivered quickly and securely with our
              professional delivery service.
            </p>
            <div className='bg-white rounded-lg p-4 shadow-lg'>
              <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                <div className='flex-1'>
                  <label className='block text-gray-700 mb-2'>
                    Pickup Location
                  </label>
                  <div className='flex items-center bg-gray-100 rounded-lg p-2'>
                    <MapPin className='w-5 h-5 text-gray-500 mr-2' />
                    <input
                      type='text'
                      placeholder='Enter pickup address'
                      className='bg-transparent w-full text-gray-800 focus:outline-none'
                    />
                  </div>
                </div>
                <div className='flex-1'>
                  <label className='block text-gray-700 mb-2'>
                    Delivery Location
                  </label>
                  <div className='flex items-center bg-gray-100 rounded-lg p-2'>
                    <MapPin className='w-5 h-5 text-gray-500 mr-2' />
                    <input
                      type='text'
                      placeholder='Enter delivery address'
                      className='bg-transparent w-full text-gray-800 focus:outline-none'
                    />
                  </div>
                </div>
                <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>
            Our Services
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {services.map(service => (
              <div
                key={service.id}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  selectedService === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:shadow-md'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className='flex items-start space-x-4'>
                  <div
                    className={`p-3 rounded-full ${
                      selectedService === service.id
                        ? 'bg-blue-500'
                        : 'bg-blue-100'
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h4 className='font-semibold text-lg mb-2'>
                      {service.title}
                    </h4>
                    <p
                      className={`text-sm mb-3 ${
                        selectedService === service.id
                          ? 'text-blue-100'
                          : 'text-gray-600'
                      }`}
                    >
                      {service.description}
                    </p>
                    <p className='font-semibold'>{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-gray-100 py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>
            Why Choose Us
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg'>
              <Clock className='w-8 h-8 text-blue-600 mb-4' />
              <h4 className='font-semibold text-lg mb-2'>Real-time Tracking</h4>
              <p className='text-gray-600'>
                Track your deliveries in real-time with our advanced tracking
                system
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg'>
              <Shield className='w-8 h-8 text-blue-600 mb-4' />
              <h4 className='font-semibold text-lg mb-2'>Secure Delivery</h4>
              <p className='text-gray-600'>
                Your packages are insured and handled with utmost care
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg'>
              <DollarSign className='w-8 h-8 text-blue-600 mb-4' />
              <h4 className='font-semibold text-lg mb-2'>
                Competitive Pricing
              </h4>
              <p className='text-gray-600'>
                Get the best rates for your delivery needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-400 py-12 px-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h5 className='text-white font-semibold mb-4'>DeliverEase</h5>
            <p className='text-sm'>
              Your trusted partner for last-mile delivery solutions.
            </p>
          </div>
          <div>
            <h5 className='text-white font-semibold mb-4'>Quick Links</h5>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Coverage Area
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='text-white font-semibold mb-4'>Contact Us</h5>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <Phone className='w-4 h-4 mr-2' />
                1-800-DELIVER
              </li>
              <li className='flex items-center'>
                <MapPin className='w-4 h-4 mr-2' />
                123 Delivery Street
              </li>
            </ul>
          </div>
          <div>
            <h5 className='text-white font-semibold mb-4'>Download App</h5>
            <div className='space-y-2'>
              <button className='bg-gray-800 text-white px-4 py-2 rounded w-full hover:bg-gray-700'>
                App Store
              </button>
              <button className='bg-gray-800 text-white px-4 py-2 rounded w-full hover:bg-gray-700'>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DeliveryWebsite
