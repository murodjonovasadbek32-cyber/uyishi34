import React from 'react'
import { members } from '../data/members'
import StastusBadge from './StastusBadge'
const CustomerTable = () => {
  return (
    <div className='p-8 bg-white rounded shadow-md flex-1'>
      <h2 className='text-xl font-bold mb-4'>Customers</h2>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Company</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Phone</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Country</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {members.map((member) => (
            <tr key={member.Email}>
              <td className='px-6 py-4 whitespace-nowrap'>{member.customer_name}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{member.Company}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{member.phoneNumber}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{member.Email}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{member.Country}</td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <StastusBadge status={member.Status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
  )
}

export default CustomerTable
