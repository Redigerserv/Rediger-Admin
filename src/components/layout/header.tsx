import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

const Header = ({setSidebar}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isnotify, setNotify] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
        setNotify(false);
    }
    const toggleNotification = () => {
        setNotify((prev) => !prev);
        setIsOpen(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setNotify(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return(
        <>
         <div className="nk-header nk-header-fixed is-light">
                    <div className="container-fluid">
                        <div className="nk-header-wrap">
                            <div className="nk-menu-trigger d-xl-none ms-n1">
                                <a href="#" className="nk-nav-toggle nk-quick-nav-icon" onClick={()=>setSidebar((a: any)=>!a)} data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                            </div>
                            <div className="nk-header-brand d-xl-none">
                                <a href="html/index.html" className="logo-link">
                                    <Image className="logo-light logo-img" src={logo} alt="logo" width={150}/>
                                    <Image className="logo-dark logo-img" src={logo} alt="logo"/>
                                </a>
                            </div>
                            <div className="nk-header-news d-none d-xl-block ">
                                REDIGER
                                {/* <div className="nk-news-list">
                                    <a className="nk-news-item" href="#">
                                        <div className="nk-news-icon">
                                            <em className="icon ni ni-card-view"></em>
                                        </div>
                                        <div className="nk-news-text">
                                            <p>Do you know the latest update of 2022? <span> A overview of our is now available on YouTube</span></p>
                                            <em className="icon ni ni-external"></em>
                                        </div>
                                    </a>
                                </div> */}
                            </div>
                            <div className="nk-header-tools" ref={dropdownRef}>
                                <ul className="nk-quick-nav">
                                    {/* <li className="dropdown language-dropdown d-none d-sm-block me-n1">
                                        <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                                            <div className="quick-icon border border-light">
                                                <img className="icon" src="./images/flags/english-sq.png" alt=""/>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                                            <ul className="language-list">
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/english.png" alt="" className="language-flag"/>
                                                        <span className="language-name">English</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/spanish.png" alt="" className="language-flag"/>
                                                        <span className="language-name">Español</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/french.png" alt="" className="language-flag"/>
                                                        <span className="language-name">Français</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/turkey.png" alt="" className="language-flag"/>
                                                        <span className="language-name">Türkçe</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    <li className="dropdown user-dropdown" >
                                        <a href="#" className={`dropdown-toggle ${isOpen ? 'show' : ''}`} data-bs-toggle="dropdown" onClick={toggleDropdown}>
                                            <div className="user-toggle">
                                                <div className="user-avatar sm">
                                                    <em className="icon ni ni-user-alt"></em>
                                                </div>
                                                <div className="user-info d-none d-md-block">
                                                    <div className="user-status">Administrator</div>
                                                    <div className="user-name dropdown-indicator">Varun Punzuri</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className={`dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 ${isOpen ? 'show dropdownMenu' : ''}`}>
                                            <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                <div className="user-card">
                                                    <div className="user-avatar">
                                                        <span>VP</span>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className="lead-text">Varun Punzuri</span>
                                                        <span className="sub-text">varun.punzuri@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                    <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                                    <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                                    {/* <li><a className="dark-switch" href="#"><em className="icon ni ni-moon"></em><span>Dark Mode</span></a></li> */}
                                                </ul>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown notification-dropdown me-n1">
                                        <a href="#" className={`dropdown-toggle nk-quick-nav-icon ${isnotify ? 'show' : ''}`} data-bs-toggle="dropdown" onClick={toggleNotification}>
                                            <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em></div>
                                        </a>
                                        <div className={`dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1 ${isnotify ? 'show dropdownMenu' : ''} `}>
                                            <div className="dropdown-head">
                                                <span className="sub-title nk-dropdown-title">Notifications</span>
                                                <a href="#">Mark All as Read</a>
                                            </div>
                                            <div className="dropdown-body">
                                                <div className="nk-notification">
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                            <div className="nk-notification-time">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-foot center">
                                                <a href="#">View All</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Header;