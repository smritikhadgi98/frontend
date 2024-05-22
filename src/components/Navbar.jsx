import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    //get user data from local store
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Lensify<span className='text-danger'>App</span> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>





                            </ul>
                            <form className="d-flex" role="search">
                                {
                                    user ? (<>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Welcome,{user.firstName}!
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                                <li><a class="dropdown-item" href="#">Setings</a></li>
                                                <li><a class="dropdown-item" href="#">Logout</a></li>
                                            </ul>
                                        </div>
                                    </>)
                                        : (<> <Link to={'/register'} className="btn btn-primary " type="submit">Register</Link>
                                            <Link to={'/login'} className="btn btn-success ms-2" type="submit">Login</Link></>)
                                }

                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
