import React from 'react'
import Navbar from '../components/Navbar'

const Layout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <p>este es el footer</p>
        </>
    )
}

export default Layout