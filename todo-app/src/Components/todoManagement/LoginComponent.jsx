import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
export default class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: 'Nikhil',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            //userCreation:this.props.location.state.detail == null ? '' : this.props.location.state.detail
        }

        this.handelChange = this.handelChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }

    handelChange(event) {
        //console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    // componentWillUnmount(){
    //     this.setState({userCreation:''})
    // }

    // handelPassword(event){
    //     console.log(event.target.value)
    //     this.setState({password : event.target.value})
    // }

    loginClick() {
        //Using JWT Token
           AuthenticationService.executeJwtAuthenticationService(this.state.userName, this.state.password)
           .then((response) => {
                    console.log(response.data.token)

                    AuthenticationService.registerSuccessfulLoginForJwt(this.state.userName, response.data.token)
                    
                    console.log("response.data.token")
                    this.setState({ showSuccessMessage: true })
                    this.setState({ hasLoginFailed: false })

                    this.props.history.push(`/welcome/${this.state.userName}`);
                }
            )
            .catch(() => {
                console.log("LOGIN COMPONENT ERROR")
                    this.setState({ showSuccessMessage: false })
                    this.setState({ hasLoginFailed: true })
                }
            )

           // basic authentication service

        //     AuthenticationService.executeBasicAuthenticationService(this.state.userName, this.state.password)
        //    .then((response) => {
        //             console.log(response.data.message)

        //             AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.password)
                    
        //             this.setState({ showSuccessMessage: true })
        //             this.setState({ hasLoginFailed: false })

        //             this.props.history.push(`/welcome/${this.state.userName}`);
        //         }
        //     )
        //     .catch(() => {
        //             this.setState({ showSuccessMessage: false })
        //             this.setState({ hasLoginFailed: true })
        //         }
        //     )

         //console.log("login");
        // if (this.state.userName === 'Nikhil' && this.state.password === 'asd') {
        //     //Authentication from another JS file
        //     AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.password)

        //     this.props.history.push(`/welcome/${this.state.userName}`);
        //     this.setState({ showSuccessMessage: true })
        //     this.setState({ hasLoginFailed: false })
        // }
        // else {
        //     console.log("failed")
        //     this.setState({ showSuccessMessage: false })
        //     this.setState({ hasLoginFailed: true })
        // }
        // document.cookie = this.state;
        
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <LoggedIN showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid one</div>}
                    {this.state.showSuccessMessage && <div className="alert">Logged In</div>}
                    <form className="responsive">
                        <table className="table">
                            <tbody>
                                <tr><td>User Name</td><td><input type="text" name="userName" autoComplete="false" placeholder="UserName" value={this.state.userName} onChange={this.handelChange} /></td></tr>
                                <tr><td>Password</td><td><input type="password" name="password" placeholder="Password" maxLength="20" value={this.state.password} onChange={this.handelChange} /></td></tr>
                                <tr><td colSpan="2"><button className="btn btn-success" onClick={this.loginClick} type="button" >Login</button></td></tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    }


}