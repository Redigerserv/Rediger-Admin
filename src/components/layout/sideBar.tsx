import Image from "next/image";
import { useState } from "react";

import logo from "../../assets/images/logo.png";
import Link from "next/link";

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
                        <Link  className="nk-nav-toggle nk-quick-nav-icon d-xl-none" onClick={() => setSidebar((a: any) => !a)} data-target="sidebarMenu" href={""}><em className="icon ni ni-arrow-left"></em></Link>
                        <Link  className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" onClick={handleToggleClick} data-target="sidebarMenu" href={""}><em className="icon ni ni-menu"></em></Link>
                    </div>
                    <div className="nk-sidebar-brand">
                        <Link href="html/index.html" className="logo-link nk-sidebar-logo">
                            <Image className="logo-light logo-img" src={logo} alt="logo" width={150}/>
                            {/* <Image className="logo-dark logo-img" src={logo} alt="logo-dark"/> */}
                        </Link>
                    </div>
                </div>
                <div className="nk-sidebar-element nk-sidebar-body" >
                    <div className="nk-sidebar-content" style={{overflow: hasHover ? 'auto' : !isCompact ? 'hidden' : isCompact ? 'auto' : '' }}>
                        <div className="nk-sidebar-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <ul className="nk-menu">
                                <li className="nk-menu-item">
                                    <Link href="html/crm/index.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill"></em></span>
                                        <span className="nk-menu-text">Dashboard</span>
                                    </Link>
                                </li>
                                <li className={`nk-menu-item has-sub ${isSubMenu ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={handleToggleSubMenu} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-users-fill"></em></span>
                                        <span className="nk-menu-text">Lead</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/people.html" className="nk-menu-link"><span className="nk-menu-text">People</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/organizations.html" className="nk-menu-link"><span className="nk-menu-text">Organization</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/customer-list.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-user-list-fill"></em></span>
                                        <span className="nk-menu-text">Customers</span>
                                    </Link>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu02 ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={() => setmenu02(!ismenu02)} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-cart-fill"></em></span>
                                        <span className="nk-menu-text">Sales</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/invoices.html" className="nk-menu-link"><span className="nk-menu-text">Invoices</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/payment.html" className="nk-menu-link"><span className="nk-menu-text">Payment</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/recent-sale.html" className="nk-menu-link"><span className="nk-menu-text">Recent Sale</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/estimates.html" className="nk-menu-link"><span className="nk-menu-text">Estimates</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/expenses.html" className="nk-menu-link"><span className="nk-menu-text">Expenses</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu03 ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={() => setmenu03(!ismenu03)} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-tranx"></em></span>
                                        <span className="nk-menu-text">Transaction</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/deposit.html" className="nk-menu-link"><span className="nk-menu-text">Recent Deposits</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/transaction.html" className="nk-menu-link"><span className="nk-menu-text"> All Transaction</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/transfer-report.html" className="nk-menu-link"><span className="nk-menu-text">Transfer Report</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu04 ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={() => setmenu04(!ismenu04)} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-task-fill-c"></em></span>
                                        <span className="nk-menu-text">Task</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/running-task.html" className="nk-menu-link"><span className="nk-menu-text">Running Task</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/Linkrchive-task.html" className="nk-menu-link"><span className="nk-menu-text">Archived Task</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu05 ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={() => setmenu05(!ismenu05)} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-coin"></em></span>
                                        <span className="nk-menu-text">Account</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/client-payment.html" className="nk-menu-link"><span className="nk-menu-text">Client Payment</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/expense-management.html" className="nk-menu-link"><span className="nk-menu-text">Expense Management</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu06 ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={() => setmenu06(!ismenu06)} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-truck"></em></span>
                                        <span className="nk-menu-text">Product Management</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/products.html" className="nk-menu-link"><span className="nk-menu-text">Products</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/warehouse.html" className="nk-menu-link"><span className="nk-menu-text">Warehouse</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/product-transfer.html" className="nk-menu-link"><span className="nk-menu-text">Product Transfer</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu07 ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={() => setmenu07(!ismenu07)} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-growth-fill"></em></span>
                                        <span className="nk-menu-text">Report</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/dealing-info.html" className="nk-menu-link"><span className="nk-menu-text">Dealing Info</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/client-report.html" className="nk-menu-link"><span className="nk-menu-text">Client Report</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/expense-report.html" className="nk-menu-link"><span className="nk-menu-text">Expense Report</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/employee.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span>
                                        <span className="nk-menu-text">Employees</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/projects.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-list-index-fill"></em></span>
                                        <span className="nk-menu-text">Projects</span>
                                    </Link>
                                </li>
                                <li className={`nk-menu-item has-sub ${ismenu08 ? 'active' : ''}`}>
                                    <Link  className="nk-menu-link nk-menu-toggle" onClick={() => setmenu08(!ismenu08)} href={""}>
                                        <span className="nk-menu-icon"><em className="icon ni ni-coins"></em></span>
                                        <span className="nk-menu-text">Payroll</span>
                                    </Link>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/salary-grade.html" className="nk-menu-link"><span className="nk-menu-text">Salary grade</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link href="html/crm/employee-salary-list.html" className="nk-menu-link"><span className="nk-menu-text">Employee Salary List</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/time-history.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-calendar-check-fill"></em></span>
                                        <span className="nk-menu-text">Attendance</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/subscription.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-invest"></em></span>
                                        <span className="nk-menu-text">Subscription</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/notice-board.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-notice"></em></span>
                                        <span className="nk-menu-text">Notice Board</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/support.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-chat-circle-fill"></em></span>
                                        <span className="nk-menu-text">Support</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/crm/settings.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-setting-alt-fill"></em></span>
                                        <span className="nk-menu-text">Settings</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-heading">
                                    <h6 className="overline-title text-primary-alt">Return to</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/index.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashlite-alt"></em></span>
                                        <span className="nk-menu-text">Main Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="html/components.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span>
                                        <span className="nk-menu-text">All Components</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default SideBar;