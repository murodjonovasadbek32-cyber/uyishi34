import React from 'react'

const AvailabilityBadge = ({ status }) => {
  const base = 'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold'
  const statusStyles = {
    'In Stock': `${base} bg-emerald-50 text-emerald-800`,
    'Low Stock': `${base} bg-amber-50 text-amber-800`,
    'Out of Stock': `${base} bg-rose-50 text-rose-800`,
  }
  const dotStyles = {
    'In Stock': 'bg-emerald-600',
    'Low Stock': 'bg-amber-500',
    'Out of Stock': 'bg-rose-600',
  }

  return (
    <span className={statusStyles[status] ?? `${base} bg-gray-100 text-gray-700`}>
      <span className={`size-1.5 rounded-full ${dotStyles[status] ?? 'bg-gray-500'}`} aria-hidden='true' />
      {status}
    </span>
  )
}

export default AvailabilityBadge