import Image from "next/image";
import { useState } from "react";

import logo from "../../assets/images/logo.png";

const SideBar = ({isSideBar , setSidebar}: any) => {

  // State to control compact mode and hover effect
  const [isCompact, setIsCompact] = useState(false);
  const [hasHover, setHasHover] = useState(false);
  const [isSubMenu, setSubMenu] = useState(false);
  const [ismenu02, setmenu02] = useState(false);
  const [ismenu03, setmenu03] = useState(false);
  const [ismenu04, setmenu04] = useState(false);
  const [ismenu05, setmenu05] = useState(false);
  const [ismenu06, setmenu06] = useState(false);
  const [ismenu07, setmenu07] = useState(false);
  const [ismenu08, setmenu08] = useState(false);
//   const [isSubMenu, setSubMenu] = useState(false);


  // Toggle compact mode
  const handleToggleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsCompact((prev) => !prev);
    setSubMenu(false)
    setmenu02(false)
    setmenu03(false)
    setmenu04(false)
    setmenu05(false)
    setmenu06(false)
    setmenu07(false)
    setmenu08(false)

  };
  // Toggle submenu
  const handleToggleSubMenu = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubMenu((prev) => !prev);
  };

  // Handle hover effects
  const handleMouseEnter = () => {
    if (!isCompact) {
      setHasHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isCompact) {
      setHasHover(false);
      setSubMenu(false)
      setmenu02(false)
      setmenu03(false)
      setmenu04(false)
      setmenu05(false)
      setmenu06(false)
      setmenu07(false)
      setmenu08(false)
    }
  };

  // The target identifier
  const targetId = 'sidebar-content'; // Change this to your actual target value


    return (
        <>
      <div className={`nk-sidebar nk-sidebar-fixed is-dark ${isCompact ? '' : 'is-compact' }  ${hasHover ? 'has-hover' : ''}  ${isSideBar ? 'nk-sidebar-mobile nk-sidebar-active' : ''} `} data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-menu-trigger">
                        <a  className="nk-nav-toggle nk-quick-nav-icon d-xl-none" onClick={()=>setSidebar((a:any)=> !a)} data-target="sidebarMenu"><em className="icon ni ni-arrow-left"></em></a>
                        <a  className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" onClick={handleToggleClick} data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-sidebar-brand">
                        <a href="html/index.html" className="logo-link nk-sidebar-logo">
                            <Image className="logo-light logo-img" src={logo} alt="logo" width={150}/>
                            {/* <Image className="logo-dark logo-img" src={logo} alt="logo-dark"/> */}
                        </a>
                    </div>
                </div>
                <div className="nk-sidebar-element nk-sidebar-body" >
                    <div className="nk-sidebar-content" style={{overflow: hasHover ? 'auto' : !isCompact ? 'hidden' : isCompact ? 'auto' : '' }}>
                        <div className="nk-sidebar-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <ul className="nk-menu">
                                <li className="nk-menu-item">
                                    <a href="html/crm/index.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill"></em></span>
                                        <span className="nk-menu-text">Dashboard</span>
                                    </a>
                                </li>
                                <li className={`nk-menu-item has-sub ${isSubMenu ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={handleToggleSubMenu}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-users-fill"></em></span>
                                        <span className="nk-menu-text">Lead</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/people.html" className="nk-menu-link"><span className="nk-menu-text">People</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/organizations.html" className="nk-menu-link"><span className="nk-menu-text">Organization</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/customer-list.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-user-list-fill"></em></span>
                                        <span className="nk-menu-text">Customers</span>
                                    </a>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu02 ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={()=>setmenu02(!ismenu02)}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-cart-fill"></em></span>
                                        <span className="nk-menu-text">Sales</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/invoices.html" className="nk-menu-link"><span className="nk-menu-text">Invoices</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/payment.html" className="nk-menu-link"><span className="nk-menu-text">Payment</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/recent-sale.html" className="nk-menu-link"><span className="nk-menu-text">Recent Sale</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/estimates.html" className="nk-menu-link"><span className="nk-menu-text">Estimates</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/expenses.html" className="nk-menu-link"><span className="nk-menu-text">Expenses</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu03 ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={()=>setmenu03(!ismenu03)}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-tranx"></em></span>
                                        <span className="nk-menu-text">Transaction</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/deposit.html" className="nk-menu-link"><span className="nk-menu-text">Recent Deposits</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/transaction.html" className="nk-menu-link"><span className="nk-menu-text"> All Transaction</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/transfer-report.html" className="nk-menu-link"><span className="nk-menu-text">Transfer Report</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu04 ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={()=>setmenu04(!ismenu04)}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-task-fill-c"></em></span>
                                        <span className="nk-menu-text">Task</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/running-task.html" className="nk-menu-link"><span className="nk-menu-text">Running Task</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/archive-task.html" className="nk-menu-link"><span className="nk-menu-text">Archived Task</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu05 ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={()=>setmenu05(!ismenu05)}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-coin"></em></span>
                                        <span className="nk-menu-text">Account</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/client-payment.html" className="nk-menu-link"><span className="nk-menu-text">Client Payment</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/expense-management.html" className="nk-menu-link"><span className="nk-menu-text">Expense Management</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu06 ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={()=>setmenu06(!ismenu06)}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-truck"></em></span>
                                        <span className="nk-menu-text">Product Management</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/products.html" className="nk-menu-link"><span className="nk-menu-text">Products</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/warehouse.html" className="nk-menu-link"><span className="nk-menu-text">Warehouse</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/product-transfer.html" className="nk-menu-link"><span className="nk-menu-text">Product Transfer</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu07 ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={()=>setmenu07(!ismenu07)}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-growth-fill"></em></span>
                                        <span className="nk-menu-text">Report</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/dealing-info.html" className="nk-menu-link"><span className="nk-menu-text">Dealing Info</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/client-report.html" className="nk-menu-link"><span className="nk-menu-text">Client Report</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/expense-report.html" className="nk-menu-link"><span className="nk-menu-text">Expense Report</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/employee.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span>
                                        <span className="nk-menu-text">Employees</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/projects.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-list-index-fill"></em></span>
                                        <span className="nk-menu-text">Projects</span>
                                    </a>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu08 ? 'active' : ''}`}>
                                    <a  className="nk-menu-link nk-menu-toggle" onClick={()=>setmenu08(!ismenu08)}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-coins"></em></span>
                                        <span className="nk-menu-text">Payroll</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/crm/salary-grade.html" className="nk-menu-link"><span className="nk-menu-text">Salary grade</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/crm/employee-salary-list.html" className="nk-menu-link"><span className="nk-menu-text">Employee Salary List</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/time-history.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-calendar-check-fill"></em></span>
                                        <span className="nk-menu-text">Attendance</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/subscription.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-invest"></em></span>
                                        <span className="nk-menu-text">Subscription</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/notice-board.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-notice"></em></span>
                                        <span className="nk-menu-text">Notice Board</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/support.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-chat-circle-fill"></em></span>
                                        <span className="nk-menu-text">Support</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/crm/settings.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-setting-alt-fill"></em></span>
                                        <span className="nk-menu-text">Settings</span>
                                    </a>
                                </li>
                                <li className="nk-menu-heading">
                                    <h6 className="overline-title text-primary-alt">Return to</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/index.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashlite-alt"></em></span>
                                        <span className="nk-menu-text">Main Dashboard</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="html/components.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span>
                                        <span className="nk-menu-text">All Components</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


{/* <div>
      <button
        className={`nk-nav-compact ${isCompact ? 'compact-active' : ''}`}
        onClick={handleToggleClick}
        data-target={targetId}
      >
        Toggle Sidebar
      </button>

      <div
        className={`sidebar ${isCompact ? 'is-compact' : ''}`}
      >
        <div
          className={`sidebar-body ${hasHover ? 'has-hover' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Sidebar Content
        </div>
      </div>

      <div
        className={`sidebar-content ${isCompact ? 'is-compact' : ''}`}
        data-content={targetId}
      >
        Content for the sidebar
      </div>
    </div> */}

        </>
    )
}
export default SideBar;