import React from 'react'

const Sidebar = () => {
  return (
    <aside className='border-b border-gray-200 bg-white px-4 py-4 sm:px-8 lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:px-6 lg:py-8'>
      <a href='#overview' className='flex w-fit items-center gap-3 text-gray-900'>
        <span className='grid size-9 place-items-center rounded-md bg-emerald-800 font-serif text-lg font-bold text-white'>M</span>
        <span>
          <span className='block text-sm font-bold uppercase tracking-wide'>Mercantile</span>
          <span className='block text-xs text-gray-500'>Inventory workspace</span>
        </span>
      </a>
      <p className='mb-2 mt-8 hidden text-xs font-semibold uppercase tracking-wide text-gray-400 lg:block'>Workspace</p>
      <nav aria-label='Main navigation' className='mt-4 flex gap-2 lg:mt-0 lg:flex-col'>
        <a href='#overview' className='rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900'>Overview</a>
        <a href='#products' aria-current='page' className='rounded-md border-l-2 border-emerald-700 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-900'>Products</a>
      </nav>
    </aside>
  )
}

export default Sidebar
