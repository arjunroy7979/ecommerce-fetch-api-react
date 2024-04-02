import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const { carts } = useSelector(item => item.users)
    return (
        <>
            <nav className="navbar bg-body-light shadow-sm">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand fw-bold fs-4 mx-4">Our Collection's</Link>
                    <div className="buttons">
                        <Link to={'/login'} className='btn btn-outline-dark btn-sm'>
                            <i className='fa fa-sign-in me-1' />
                            Login
                        </Link>
                        <Link to={'/register'} className='btn btn-outline-dark btn-sm ms-2'>
                            <i className='fa fa-user-plus me-1' />
                            Register
                        </Link>
                        <Link to={'/cart'} className='btn btn-outline-dark btn-sm ms-2'>
                            <i className='fa fa-shopping-cart me-1' />
                            Cart ({carts.length})
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar