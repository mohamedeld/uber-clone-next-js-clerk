import React from 'react'
import Input from './Input'

const Search = () => {
  return (
    <div className='p-2 md:p-6 border-[2px] rounded-xl'>
      <p className="text-[20px] font-bold">Get a ride</p>
      <Input/>
      <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Search</button>
          
    </div>
  )
}

export default Search