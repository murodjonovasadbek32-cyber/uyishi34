import React from 'react'
import ProductTable from './components/ProductTable'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div className='min-h-screen lg:flex'>
      <Sidebar />
      <main className='min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-9 lg:px-10'>
        <header className='mx-auto mb-8 flex max-w-7xl flex-wrap items-end justify-between gap-4'>
          <div>
            <p className='mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700'>Store / Catalog</p>
            <h1 className='font-serif text-3xl font-bold text-gray-900 sm:text-4xl'>Product inventory</h1>
          </div>
          <span className='rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm'>
            Central warehouse
          </span>
        </header>
        <ProductTable />
      </main>
    </div>
  )
}

export default App
