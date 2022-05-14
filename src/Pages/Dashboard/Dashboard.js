import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:px-12 h-fit bg-accent drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-8">
        {/* <!-- Page content here --> */}
        <Outlet/>
        
      </div>
      <div className="drawer-side my-8 rounded">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard" className="link link-hover">My Appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/myreview" className="link link-hover">My Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
