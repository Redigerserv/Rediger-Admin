import { useState } from "react"
import Login from "../auth/login"
import SideBar from "./sideBar"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {

    const [isOpen, setOpen] = useState(false)
    const [isSideBar, setSidebar] = useState(false)

    if (!isOpen) {
        return (
            <>
                <Login setOpen={setOpen} />
            </>
        )
    }

    if (isOpen) {
        return (
            <>
                <SideBar isSideBar={isSideBar} setSidebar={setSidebar}/>
                <div className="main-page-wrapper nk-wrap">
                    <Header setSidebar={setSidebar} />
                    <main className="nk-body bg-lighter npc-general has-sidebar no-touch nk-nio-theme">{children}</main>
                    <Footer/>
                </div>

            </>
        )
    }

    return <></>


}

export default Layout