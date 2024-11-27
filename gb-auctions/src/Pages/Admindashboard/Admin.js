import React from 'react'
import AdimSidebar from '../../components/AdminSidebar/AdimSidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="dash-layout-outer">
      <div className="max-width dashboard-layout">
        <div className="side-bar-dash">
          <AdimSidebar />
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin