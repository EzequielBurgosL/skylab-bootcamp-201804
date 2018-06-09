import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'

class Navbar extends Component {
    render() {
        return (
            <main>
                <nav className="site-header sticky-top py-1">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <div className="py-2 d-none d-md-inline-block">
                            {/* <i className="fas fa-music" />
                            <i className="fas fa-music" /> */}
                        </div>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/">Home</Link>
                        </span>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/categories">Products</Link>
                        </span>
                        <span className="py-2 d-none d-md-inline-block">Search</span>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/auth">Login</Link>
                        </span>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/register">Register</Link>
                        </span>
                    </div>
                </nav>

            </main>
        )
    }

}

export default Navbar