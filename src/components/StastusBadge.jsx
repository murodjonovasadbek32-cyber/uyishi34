import React from 'react'

const StastusBadge = ({ status }) => {
  const base = 'px-2 py-1 rounded text-xs font-semibold'
  const statusStyles = {
    Active: `${base} bg-green-100 text-green-800`,
    Inactive: `${base} bg-red-100 text-red-800`,
  }

  return <span className={statusStyles[status] ?? base}>{status}</span>
}

export default StastusBadge
