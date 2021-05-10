import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
//import Logo from '../../../src/images.png'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log("is logged in value = " + isUserLoggedIn );
        //console.log("header")
        return (
             <div className="responsive">
                 <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                        <div>
                            <a href="/" className="navbar-brand"><strong>Todo</strong>
                                {/* <img src={Logo} alt="Todo" /> */}
                                </a> 
                        </div>
                        <ul className="navbar-nav navbar-collapse justify-content-start">
                            {AuthenticationService.isUserLoggedIn() && <li ><Link className="nav-link" to="/welcome/nikhil">Home</Link></li>}
                            {AuthenticationService.isUserLoggedIn() && <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            { !isUserLoggedIn && <li ><Link className="nav-link" to="/register">Register</Link></li>}
                            { !isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                            { AuthenticationService.isUserLoggedIn() && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logoutUser}>Logout</Link></li>}
                        </ul>
                    </nav>
                 </header>
             </div> 
        )
    }
}
export default withRouter(HeaderComponent);

