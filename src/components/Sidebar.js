import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
  return <>
   <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<div className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</div>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */} 
 <li className="nav-item">
    <div className="nav-link" >
    <i className="fas fa-fw fa-tachometer-alt"></i>
       <Link to='/dashboard'> <span style={{"color":"white"}}>Dashboard</span> </Link>
        </div>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>
{/* 
<!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <div className="nav-link collapsed" >
        <i className="fas fa-fw fa-cog"></i>
        <Link to='/create-student'> <span style={{"color":"white"}}>Create student</span> </Link>
        
    </div>
    
</li>


</ul>
  </>
}

export default Sidebar;