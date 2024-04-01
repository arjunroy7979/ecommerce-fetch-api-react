import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-light shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4 mx-4">Our Collection's</Link>
                    <div className="buttons">
                        <Link to={'#'} className='btn btn-outline-dark btn-sm'>
                            <i className='fa fa-sign-in me-1' />
                            Login
                        </Link>
                        <Link to={'#'} className='btn btn-outline-dark btn-sm ms-2'>
                            <i className='fa fa-user-plus me-1' />
                            Register
                        </Link>
                        <Link to={'#'} className='btn btn-outline-dark btn-sm ms-2'>
                            <i className='fa fa-shopping-cart me-1' />
                            Cart (0)
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar