import React, { useEffect, useState } from 'react'
import InputImg from '../../assets/food.jpg'
import axios from 'axios'
import { MainContext } from '../../App'

const InputSearch = ( { setSearch } ) => {
    
    return (
        <div className='w-full h-[300px] bg-red-200 '>
        <div className='flex w-full h-[45vh] items-center justify-center'>
            <input onChange={e => setSearch(e.target.value)} className='w-[50%] px-4 py-2 border-none rounded-md outline-none' type="text" placeholder='Category...'/>
        </div>
    </div>
  )
}

export default InputSearch