import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
import RegisterComponent from './RegisterComponent'
import WelcomePageComponent from './WelcomePageComponent.jsx'
import TodosComponent from './TodosComponent'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import AuthenticiatedRoute from './AuthenticatedRoute.jsx'
import FooterComponent from './FooterComponent'

import './CSS/TodoApp.css'
import TodoListUpdateComponent from './TodoListUpdateComponent'

export class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/register" component={RegisterComponent} />
                        <AuthenticiatedRoute path="/welcome/:name" component={WelcomePageComponent} />
                        <AuthenticiatedRoute path="/todos" component={TodosComponent} />
                        <AuthenticiatedRoute exact path="/todolistupdate/:id" component={TodoListUpdateComponent} />
                        <AuthenticiatedRoute path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Password</div>;
//     }

//     return null;
// }
// function LoggedIN(props){
//     if(props.showSuccessMessage){
//         return <div>Logged In</div>;
//     }
//     return null;
// }