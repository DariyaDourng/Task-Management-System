"use client";
import IconCheck from '@/public/icons/IconCheck';
import IconFileCheck from '@/public/icons/IconFileCheck';
import IconGrid from '@/public/icons/IconGrid';
import IconStopwatch from '@/public/icons/IconStopwatch';
import { usePathname } from 'next/navigation';
import { title } from 'process';
import React from 'react'

function MiniSidebar() {

  const pathname = usePathname();

  const getStrokeColor = (path: string) => {
    return pathname === path ? "#3B82F6" : "black";
  };
  const navItems = [{
    icon: <IconGrid/>,
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
    <div className='basic-sidebar'>
    Minisidebar
    </div>
  )
}

export default MiniSidebar;

