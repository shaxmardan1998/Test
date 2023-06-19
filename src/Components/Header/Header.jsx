import React from 'react'
import { MainContext } from '../../App'

const Header = () => {
  return (
    <div className='w-full h-[80px] flex item-center'>
        <div className='w-[80%] mx-auto  flex items-center justify-between'>
            <div className='text-3xl flex font-bold items-center'>
                <span className='text-red-500'><i className='bx bxs-basket'></i></span>
                Food
            </div>
            <ul>
                <li className='flex gap-4'>
                    <a className='text-[20px]' href="#">Home</a>
                    <a className='text-[20px]' href="#">About</a>
                    <a className='text-[20px]' href="#">Services</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header