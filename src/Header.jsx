import React from 'react'

function Header() {
  return (
    <div className='p-1 flex items-center justify-center gap-x-20'>
      <div className=''>
        <p className='text-green-400 text-2xl font-bold'>momos</p>
      </div>
      <div>
        <li className='list-none flex gap-x-9 text-gray-400 items-center'>
            <a href="#">About us</a>
            <a href="#">Our Menu</a>
            <a href="#">Our Services</a>
            <a href="#">Allergy Advice</a>
        </li>
      </div>
      <div className='ml-22'>
        <button className='bg-orange-600 rounded-3xl w-34 h-10 text-white'>
            Contact us
        </button>
      </div>
    </div>
  )
}

export default Header
