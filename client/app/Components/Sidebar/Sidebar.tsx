
'use client';
import React from 'react'
import Profile from '../Profile/Profile';
import { RadialChart } from '../RadialChart/RadialChart';




function Sidebar() {
  return (
    <div className='w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col overflow-y-auto'>
     <Profile />
     <div className='mt-4 mx-6'>
      <RadialChart />
     </div>
      <button className='mt-auto mb-6 mx-6 py-4 px-8 bg-[#EB4E31] text-white rounded-[50px] hover:bg-[#3aafae] transition duration-300 ease-in-out'>
      Sign Out
      </button>
    </div>
  )
}

export default Sidebar
