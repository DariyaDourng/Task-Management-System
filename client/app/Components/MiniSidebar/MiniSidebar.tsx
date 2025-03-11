"use client";
import IconCheck from '@/public/icons/IconCheck';
import IconDeleteAll from '@/public/icons/IconDeleteAll';
import IconFileCheck from '@/public/icons/IconFileCheck';
import IconGrid from '@/public/icons/IconGrid';
import IconStopwatch from '@/public/icons/IconStopwatch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { title } from 'process';
import React from 'react'

function MiniSidebar() {

  const pathname = usePathname();

  const getStrokeColor = (path: string) => {
    return pathname === path ? "#3aafae" : "#71717a";
  };
  const navItems = [{
    icon: <IconGrid strokeColor={getStrokeColor('/')}/>,
    title: "All",
    link: "/",

  },
  {
    icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
    title: "Completed",
    link: "/completed",
  },
  {
    icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
    title: "Pending",
    link: "/pending",
  },
  {
    icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
    title: "Overdue",
    link: "/overdue",
  }
  ];

  return (
    <div className='basis-[5rem] flex flex-col bg-[#f9f9f9]'>
      <div className='flex items-center justify-center h-[5rem] '>
    {/* <img src="/logo.png" alt="logo" width={28} height={28} /> */}
      </div>
    <div className='mt-8 flex-1 flex flex-col items-center justify-between'>
      <ul className='flex flex-col gap-10'>{navItems.map((item, index)=>(
        <li key={index} className='relative group'>
          <Link href={item.link}>{item.icon}</Link>
        
          {/* hover tooling */}
          <span className='u-triangle absolute top-[50%] translate-y-[50%] left-8 text-xs pointer-events-none text-white bg-green-400 dark:bg-2 px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{item.title}</span>
        </li>
      ))} </ul>

      <div className='mb-[1.5rem]'>
        <button className='w-12 h-12 flex justify-center items-center border-2 border-red-500 p-2 rounded-full'>
          <IconDeleteAll strokeColor='#EB4E31'/>
        </button>
      </div>
    </div>
    </div>

)}

export default MiniSidebar;

