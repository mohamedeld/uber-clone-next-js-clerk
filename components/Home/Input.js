"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { IoLocation } from "react-icons/io5";

const Input = ({type}) => {
  const [value,setValue] = useState(null);
  return (
    <div className='bg-slate-200 p-3 md:p-6 rounded-lg mt-3 flex items-center gap-4'>
      <div className='w-[15px] h-[15px]'>
        <IoLocation />
      </div>
      {/* <input type="text" placeholder={type==="source"?'Pickup Location': 'Dropup Location'} className='bg-transparent w-full outline-none'/> */}
      <GooglePlacesAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOLE_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
      </div>
  )
}

export default Input