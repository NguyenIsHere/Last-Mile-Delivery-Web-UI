import React, { useState } from 'react'
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  MessageSquare,
  Package,
  User,
  ChevronRight,
  Truck,
  AlertCircle,
  CheckCircle2
} from 'lucide-react'

const DriverTracking = () => {
  const [activeStep, setActiveStep] = useState(2)
  const [showChat, setShowChat] = useState(false)

  const deliverySteps = [
    {
      id: 1,
      title: 'Picked Up',
      time: '14:30',
      completed: true,
      location: '123 Main St, City'
    },
    {
      id: 2,
      title: 'In Transit',
      time: '14:45',
      completed: true,
      location: 'On Route to Destination'
    },
    {
      id: 3,
      title: 'Arriving Soon',
      time: '15:15',
      completed: false,
      location: '5 mins away'
    },
    {
      id: 4,
      title: 'Delivered',
      time: '15:20',
      completed: false,
      location: '456 Oak Ave, Town'
    }
  ]

  // Mock driver data
  const driverInfo = {
    name: 'Mike Wilson',
    vehicle: 'Toyota Hiace',
    plate: 'ABC 123',
    phone: '+1 234-567-8900',
    rating: 4.8,
    totalDeliveries: 1250
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='grid grid-cols-1 lg:grid-cols-3 min-h-screen'>
        {/* Map Section */}
        <div className='lg:col-span-2 relative'>
          {/* Placeholder for map - in real implementation, integrate with mapping library */}
          <div className='h-screen bg-gray-200 relative'>
            {/* Simulated map content */}
            <div className='absolute inset-0 p-4'>
              <div className='bg-white rounded-lg shadow-sm p-4 max-w-sm'>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Navigation className='w-4 h-4 text-blue-600' />
                  Driver is 5 minutes away
                </div>
              </div>
            </div>

            {/* Map controls */}
            <div className='absolute right-4 top-4 space-y-2'>
              <button className='bg-white p-2 rounded-lg shadow-sm'>
                <Navigation className='w-5 h-5' />
              </button>
              <button className='bg-white p-2 rounded-lg shadow-sm'>
                <MapPin className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>

        {/* Tracking Info Section */}
        <div className='bg-white border-l'>
          <div className='h-screen overflow-y-auto'>
            {/* Driver Info */}
            <div className='p-6 border-b'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold'>Delivery Status</h2>
                <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
                  In Transit
                </span>
              </div>

              <div className='flex items-center gap-4'>
                <div className='h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center'>
                  <User className='w-6 h-6 text-gray-600' />
                </div>
                <div>
                  <div className='font-medium'>{driverInfo.name}</div>
                  <div className='text-sm text-gray-500'>
                    {driverInfo.vehicle} • {driverInfo.plate}
                  </div>
                </div>
                <button
                  className='ml-auto p-2 hover:bg-gray-100 rounded-full'
                  onClick={() => setShowChat(true)}
                >
                  <MessageSquare className='w-5 h-5 text-gray-600' />
                </button>
                <button className='p-2 hover:bg-gray-100 rounded-full'>
                  <Phone className='w-5 h-5 text-gray-600' />
                </button>
              </div>
            </div>

            {/* Delivery Progress */}
            <div className='p-6 border-b'>
              <h3 className='text-sm font-medium text-gray-500 mb-4'>
                Delivery Progress
              </h3>
              <div className='space-y-6'>
                {deliverySteps.map((step, index) => (
                  <div key={step.id} className='relative'>
                    {index !== deliverySteps.length - 1 && (
                      <div
                        className={`absolute left-4 top-8 w-0.5 h-full -ml-px ${
                          step.completed ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                    <div className='flex items-start gap-4'>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className='w-5 h-5' />
                        ) : (
                          <Clock className='w-5 h-5' />
                        )}
                      </div>
                      <div className='flex-1'>
                        <div className='flex justify-between items-center'>
                          <span className='font-medium'>{step.title}</span>
                          <span className='text-sm text-gray-500'>
                            {step.time}
                          </span>
                        </div>
                        <p className='text-sm text-gray-500 mt-1'>
                          {step.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Details */}
            <div className='p-6 border-b'>
              <h3 className='text-sm font-medium text-gray-500 mb-4'>
                Package Details
              </h3>
              <div className='bg-gray-50 rounded-lg p-4 space-y-4'>
                <div className='flex items-start gap-3'>
                  <Package className='w-5 h-5 text-gray-400 mt-1' />
                  <div>
                    <div className='font-medium'>2 Packages</div>
                    <div className='text-sm text-gray-500'>
                      Regular Delivery
                    </div>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <AlertCircle className='w-5 h-5 text-gray-400 mt-1' />
                  <div>
                    <div className='font-medium'>Special Instructions</div>
                    <div className='text-sm text-gray-500'>
                      Please handle with care
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Driver Stats */}
            <div className='p-6'>
              <h3 className='text-sm font-medium text-gray-500 mb-4'>
                Driver Information
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <div className='text-2xl font-semibold'>
                    {driverInfo.rating}
                  </div>
                  <div className='text-sm text-gray-500'>Rating</div>
                </div>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <div className='text-2xl font-semibold'>
                    {driverInfo.totalDeliveries}
                  </div>
                  <div className='text-sm text-gray-500'>Deliveries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        {showChat && (
          <div className='fixed inset-y-0 right-0 w-80 bg-white shadow-lg border-l transform transition-transform duration-200 ease-in-out'>
            <div className='p-4 border-b flex justify-between items-center'>
              <h3 className='font-medium'>Chat with Driver</h3>
              <button
                onClick={() => setShowChat(false)}
                className='text-gray-400 hover:text-gray-500'
              >
                ✕
              </button>
            </div>
            <div className='h-full p-4'>
              {/* Chat interface would go here */}
              <div className='text-center text-gray-500 text-sm'>
                Chat functionality would be implemented here
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DriverTracking
