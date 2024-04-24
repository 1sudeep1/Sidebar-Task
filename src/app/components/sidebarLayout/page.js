import React from 'react'
import Sidebar from '../sidebar/page'

const SidebarLayout = ({ children }) => {
  return (
    <>
    <div className='flex gap-2'>
    <Sidebar />
      <div>
        {children}
      </div>
    </div>
    </>
  )
}

export default SidebarLayout
