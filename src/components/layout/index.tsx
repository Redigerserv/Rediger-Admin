import Login from "../auth/login"

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {


    return (
        <>
            <div className="main-page-wrapper">
                <Login/>
                <main className="">{children}</main>
            </div>

        </>
    )

}

export default Layout