import React from 'react'
import AvailabilityBadge from './AvailabilityBadge'

const products = [
  { name: 'iPhone 15', category: 'Phone', price: 999, stock: 12, status: 'In Stock' },
  { name: 'MacBook Air M3', category: 'Laptop', price: 1299, stock: 8, status: 'In Stock' },
  { name: 'Galaxy S24', category: 'Phone', price: 849, stock: 4, status: 'Low Stock' },
  { name: 'iPad Air', category: 'Tablet', price: 599, stock: 15, status: 'In Stock' },
  { name: 'Sony WH-1000XM5', category: 'Headphones', price: 349, stock: 0, status: 'Out of Stock' },
  { name: 'Dell XPS 13', category: 'Laptop', price: 1199, stock: 3, status: 'Low Stock' },
]

const categoryStyles = {
  Phone: 'bg-sky-100 text-sky-700',
  Laptop: 'bg-violet-100 text-violet-700',
  Tablet: 'bg-amber-100 text-amber-700',
  Headphones: 'bg-rose-100 text-rose-700',
}

const ProductTable = () => {
  const inStockCount = products.filter((product) => product.status === 'In Stock').length
  const lowStockCount = products.filter((product) => product.status === 'Low Stock').length
  const outOfStockCount = products.filter((product) => product.status === 'Out of Stock').length

  return (
    <div className='mx-auto max-w-7xl'>
      <section id='overview' aria-label='Inventory overview' className='mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4'>
        <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5'>
          <p className='text-sm font-medium text-gray-500'>Total products</p>
          <p className='mt-3 font-serif text-3xl font-bold text-gray-900'>{products.length}</p>
          <p className='mt-1 text-xs text-gray-500'>Across {new Set(products.map((product) => product.category)).size} categories</p>
        </div>
        <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5'>
          <p className='text-sm font-medium text-gray-500'>In stock</p>
          <p className='mt-3 font-serif text-3xl font-bold text-emerald-800'>{inStockCount}</p>
          <p className='mt-1 text-xs text-gray-500'>Available now</p>
        </div>
        <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5'>
          <p className='text-sm font-medium text-gray-500'>Low stock</p>
          <p className='mt-3 font-serif text-3xl font-bold text-amber-700'>{lowStockCount}</p>
          <p className='mt-1 text-xs text-gray-500'>Needs attention</p>
        </div>
        <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5'>
          <p className='text-sm font-medium text-gray-500'>Out of stock</p>
          <p className='mt-3 font-serif text-3xl font-bold text-rose-700'>{outOfStockCount}</p>
          <p className='mt-1 text-xs text-gray-500'>Currently unavailable</p>
        </div>
      </section>

      <section id='products' className='overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'>
        <div className='flex items-center justify-between gap-4 border-b border-gray-200 px-5 py-4 sm:px-6'>
          <div>
            <h2 className='text-base font-semibold text-gray-900'>All products</h2>
            <p className='mt-1 text-sm text-gray-500'>Current catalog and stock levels</p>
          </div>
          <span className='shrink-0 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600'>{products.length} items</span>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200 text-sm'>
            <thead className='bg-gray-50'>
              <tr>
                <th scope='col' className='px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500 sm:px-6'>Name</th>
                <th scope='col' className='px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500 sm:px-6'>Category</th>
                <th scope='col' className='px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500 sm:px-6'>Price</th>
                <th scope='col' className='px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500 sm:px-6'>Stock</th>
                <th scope='col' className='px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500 sm:px-6'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {products.map((product) => (
                <tr key={product.name} className='transition-colors hover:bg-gray-50'>
                  <td className='whitespace-nowrap px-5 py-4 font-semibold text-gray-900 sm:px-6'>
                    <span className={`mr-3 inline-grid size-9 place-items-center rounded-md text-xs font-bold ${categoryStyles[product.category]}`} aria-hidden='true'>
                      {product.name.slice(0, 2).toUpperCase()}
                    </span>
                    {product.name}
                  </td>
                  <td className='whitespace-nowrap px-5 py-4 text-gray-600 sm:px-6'>{product.category}</td>
                  <td className='whitespace-nowrap px-5 py-4 font-medium tabular-nums text-gray-900 sm:px-6'>${product.price.toLocaleString('en-US')}.00</td>
                  <td className='whitespace-nowrap px-5 py-4 tabular-nums text-gray-600 sm:px-6'>{product.stock} units</td>
                  <td className='whitespace-nowrap px-5 py-4 sm:px-6'>
                    <AvailabilityBadge status={product.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default ProductTable