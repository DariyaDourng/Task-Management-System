'use client';
import Modal from '@/components/Modal/Modal';
import React from 'react'
interface MainLayoutProps  {
    children: React.ReactNode;

}
function MainLayout({children}: MainLayoutProps) {

  return (
    <div className='main-layout flex-1 bg-[#EDEDED] border-2 border-white rounded-[1.5rem] overflow-auto'>
      <Modal />
      {children}
    </div>
  )
}

export default MainLayout
