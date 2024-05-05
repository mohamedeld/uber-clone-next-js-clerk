import React from 'react'
import { FaTaxi } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  const menuHeader = [
    {
      id:1,
      name:'Ride',
      icon:<FaTaxi />
    },
    {
      id:2,
      name:'Package',
      icon:<FaBox />
    }
  ]
  return (
    <div className='p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex justify-between items-center'>
      <div className="flex items-center gap-24 ">
        <Image src="/images/uber.png" alt="logo image for home page" width={70} height={70}/>
        <div className='flex gap-6 items-center'>
          {
            menuHeader?.map(item=>{
              return (
                <div key={item?.id} className='flex gap-2 items-center'>
                  <div className='w-[17px] h-[17px]'>{item?.icon}</div>
                <h2 className='text-[14px] font-medium'>{item?.name}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
      <UserButton/>
    </div>
  )
}

export default Header