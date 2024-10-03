import React from 'react'
import TopNavbar from './TopNavbar'
import Head from './Head'
import SiteFooter from './SiteFooter'
const Layout = ({ children }) => {
    return (
        <div>
            {/* ===================== Head ========================= */}
            <Head />
            {/* ===================== Head ========================= */}

            {/* ===================== Navbar ========================= */}

            <TopNavbar />

            {/* ===================== Navbar ========================= */}

            {/* ===================== body ========================= */}
            {children}

            {/* ===================== body ========================= */}

            {/* ===================== Footer ========================= */}

            <SiteFooter/>
            {/* ===================== Footer ========================= */}

        </div>
    )
}

export default Layout
