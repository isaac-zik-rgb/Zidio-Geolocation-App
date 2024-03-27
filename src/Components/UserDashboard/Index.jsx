import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import DashboardPages from './DashboardPages/Index'

export default function UserDashboard() {
    
  return (
    <div className='h-screen flex flex-col'>
        <Header/>
<div className='flex items-center h-full'>
    <Sidebar/>
    <DashboardPages/>
</div>

        <Footer/>
    </div>
  )
}
