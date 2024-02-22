import MobileNav from '@/components/shared/MobileNav';
import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='root'>
      <div className='root-container'>
        <div className='wrapper'>
          <Sidebar/>
          <MobileNav/>
          <div>{children}</div>
        </div>
      </div>
    </main>
  )
}

export default Layout;