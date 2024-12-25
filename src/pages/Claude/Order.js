import React, { useState } from 'react'
import {
  Search,
  Filter,
  Package,
  Clock,
  ChevronDown,
  MapPin,
  Phone,
  User,
  Calendar,
  ArrowUpDown,
  MoreHorizontal
} from 'lucide-react'

const OrderManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState(null)

  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Smith',
      pickup: '123 Main St, City',
      delivery: '456 Oak Ave, Town',
      status: 'in_progress',
      time: '14:30',
      date: '2024-12-25',
      phone: '+1 234-567-8900',
      items: '2 packages',
      price: '$25.99',
      driver: 'Mike Wilson',
      notes: 'Handle with care'
    },
    {
      id: 'ORD-002',
      customer: 'Sarah Johnson',
      pickup: '789 Pine St, City',
      delivery: '321 Elm St, Town',
      status: 'pending',
      time: '15:45',
      date: '2024-12-25',
      phone: '+1 234-567-8901',
      items: '1 package',
      price: '$18.50',
      driver: 'Pending Assignment',
      notes: 'Fragile items'
    },
    {
      id: 'ORD-003',
      customer: 'Robert Brown',
      pickup: '567 Cedar St, City',
      delivery: '890 Maple Ave, Town',
      status: 'completed',
      time: '12:15',
      date: '2024-12-25',
      phone: '+1 234-567-8902',
      items: '3 packages',
      price: '$35.75',
      driver: 'Lisa Chen',
      notes: 'Delivered to reception'
    }
  ]

  const getStatusColor = status => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = status => {
    return status
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-8 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900'>Order Management</h1>
          <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
            New Order
          </button>
        </div>

        {/* Filters and Search */}
        <div className='bg-white rounded-lg shadow-sm p-4 mb-6'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text'
                  placeholder='Search orders...'
                  className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
            </div>
            <div className='flex gap-4'>
              <select
                className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
              >
                <option value='all'>All Status</option>
                <option value='pending'>Pending</option>
                <option value='in_progress'>In Progress</option>
                <option value='completed'>Completed</option>
              </select>
              <button className='px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50'>
                <Filter className='w-5 h-5' />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    <div className='flex items-center gap-2'>
                      Order ID
                      <ArrowUpDown className='w-4 h-4' />
                    </div>
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Customer
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Delivery Details
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Status
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Time
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {orders.map(order => (
                  <tr
                    key={order.id}
                    className='hover:bg-gray-50 cursor-pointer'
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center gap-2'>
                        <Package className='w-5 h-5 text-gray-400' />
                        <span className='font-medium text-gray-900'>
                          {order.id}
                        </span>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 h-10 w-10'>
                          <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
                            <User className='w-6 h-6 text-gray-500' />
                          </div>
                        </div>
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>
                            {order.customer}
                          </div>
                          <div className='text-sm text-gray-500'>
                            {order.phone}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='text-sm text-gray-900'>
                        From: {order.pickup}
                      </div>
                      <div className='text-sm text-gray-500'>
                        To: {order.delivery}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusText(order.status)}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      <div className='flex items-center gap-2'>
                        <Clock className='w-4 h-4' />
                        {order.time}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <button className='text-gray-400 hover:text-gray-500'>
                        <MoreHorizontal className='w-5 h-5' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details Sidebar */}
        {selectedOrder && (
          <div className='fixed inset-y-0 right-0 w-96 bg-white shadow-lg border-l transform transition-transform duration-200 ease-in-out'>
            <div className='h-full overflow-y-auto'>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-6'>
                  <h2 className='text-lg font-semibold'>Order Details</h2>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    ✕
                  </button>
                </div>

                <div className='space-y-6'>
                  {/* Order ID and Status */}
                  <div>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm font-medium text-gray-500'>
                        Order ID
                      </span>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          selectedOrder.status
                        )}`}
                      >
                        {getStatusText(selectedOrder.status)}
                      </span>
                    </div>
                    <div className='mt-1 text-lg font-semibold'>
                      {selectedOrder.id}
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div>
                    <h3 className='text-sm font-medium text-gray-500 mb-2'>
                      Customer Information
                    </h3>
                    <div className='bg-gray-50 rounded-lg p-4'>
                      <div className='flex items-center mb-4'>
                        <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
                          <User className='w-6 h-6 text-gray-500' />
                        </div>
                        <div className='ml-4'>
                          <div className='font-medium'>
                            {selectedOrder.customer}
                          </div>
                          <div className='text-sm text-gray-500'>
                            {selectedOrder.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Details */}
                  <div>
                    <h3 className='text-sm font-medium text-gray-500 mb-2'>
                      Delivery Details
                    </h3>
                    <div className='space-y-4'>
                      <div className='bg-gray-50 rounded-lg p-4'>
                        <div className='flex items-start gap-3'>
                          <MapPin className='w-5 h-5 text-gray-400 mt-1' />
                          <div>
                            <div className='font-medium'>Pickup Location</div>
                            <div className='text-sm text-gray-500'>
                              {selectedOrder.pickup}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='bg-gray-50 rounded-lg p-4'>
                        <div className='flex items-start gap-3'>
                          <MapPin className='w-5 h-5 text-gray-400 mt-1' />
                          <div>
                            <div className='font-medium'>Delivery Location</div>
                            <div className='text-sm text-gray-500'>
                              {selectedOrder.delivery}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Info */}
                  <div>
                    <h3 className='text-sm font-medium text-gray-500 mb-2'>
                      Order Information
                    </h3>
                    <div className='bg-gray-50 rounded-lg p-4 space-y-3'>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-500'>Items</span>
                        <span className='font-medium'>
                          {selectedOrder.items}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-500'>Price</span>
                        <span className='font-medium'>
                          {selectedOrder.price}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-500'>Driver</span>
                        <span className='font-medium'>
                          {selectedOrder.driver}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-500'>Notes</span>
                        <span className='font-medium'>
                          {selectedOrder.notes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderManagement
