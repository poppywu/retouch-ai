import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='auth'>{children}</div>
  )
}

export default Layout;