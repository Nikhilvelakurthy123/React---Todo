import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

export default class WelcomePageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.match.params.name,
            welcomeMessage: '',
            jsondata: [],
            inputName: ''
        }
        this.connectToBackend = this.connectToBackend.bind(this);
        this.handelSuccessfulResponse = this.handelSuccessfulResponse.bind(this)
        this.connectToBackendBean = this.connectToBackendBean.bind(this)
        this.connectToBackendBeanPathVariable = this.connectToBackendBeanPathVariable.bind(this)
        this.todoList = this.todoList.bind(this)

        this.handelChange = this.handelChange.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.You can manage your todos <Link to="/todos">here.</Link>
                </div>
                <div className="container">
                    Backend call.
                    {/* <input type='text' name="inputName" value={this.state.inputName} onChange={this.handelChange} /> */}
                    <ul>
                        <li><button onClick={this.connectToBackendBeanPathVariable} className="btn btn-success">PathVariable</button></li>
                        <li><button onClick={this.connectToBackend} className="btn btn-info">Backend</button></li>
                        <li><button onClick={this.connectToBackendBean} className="btn btn-success">Bean</button></li>
                        <li><button onClick={this.todoList} className="btn btn-success">List</button></li>
                        <li><button onClick={this.sendEmail} className="btn btn-success">Send An Email</button></li>
                    </ul>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                    {this.state.jsondata}
                </div>
            </div>
        )
    }
    connectToBackend() {
        //console.log("asd");
        HelloWorldService.executeHelloWorldService()
            .then(response => this.handelSuccessfulResponse(response))
            .catch(error => {
                //console.log(error)
                this.handleError(error)
            })
    }

    handelSuccessfulResponse(response) {
        this.setState({ jsondata: [], welcomeMessage: response.data })
    }

    connectToBackendBean() {
        HelloWorldService.executeHelloWorldBeanService()
            .then(response => this.setState({ jsondata: [], welcomeMessage: response.data.message }))
            .catch(error => {
                //console.log(error)
                this.handleError(error)
            })
    }

    connectToBackendBeanPathVariable() {
        HelloWorldService.helloWorldPathVariable(this.state.name)
            .then(response => this.setState({ jsondata: [], welcomeMessage: response.data.message }))
            .catch(error => {
                //console.log(error.response.data.message)
                this.handleError(error)
            })
    }

    todoList() {
        TodoDataService.tdodList(this.state.name)
            .then(response => JSON.stringify(response.data))
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        jsondata: result,
                        welcomeMessage: ''
                    })
                })
            .catch(error => {
                //console.log(error)
                this.handleError(error)
            })
    }

    handelChange(event) {
        //console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        //this.connectToBackendBeanPathVariable()
    }

    handleError(error) {
        let errorMessage = '';

        if (error.message)
            errorMessage += error.message

        if (error.response && error.response.data) {
            errorMessage += errorMessage.response.data.message
        }

        this.setState({ welcomeMessage: errorMessage })
    }

    sendEmail(){
        if(AuthenticationService.getUserName()){
            HelloWorldService.sendEmailService().then(res=>console.log(res.data)).catch()
        }
        else{

        }
    }

}

