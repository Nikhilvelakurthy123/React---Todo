import { ErrorMessage, Field, Form, Formik } from 'formik'
import React,{Component} from 'react'
//import moment from 'moment'
import AuthenticationService from './AuthenticationService.js'
import TodoDataService from '../../../src/api/todo/TodoDataService.js'

export default class RegisterComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            message:'',
            username:'',
            email:'',
            password:''

        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        // console.log("forms")
         console.log("SUBMITED")
        let userName = AuthenticationService.getUserName();
        console.log(userName)
        if (userName) {
            
            this.props.history.push('/todos')
        }
        else{
            TodoDataService.getTodoRegistered(values.username,values.password,values.email)
            .then(() =>  {
                this.setState({message:"created user",
                username:'',
                email:'',
                password:''})
            } )
            .catch((error) => {
                //console.log(error)
                this.setState({message:"mail already exists"}) 
            })
        }
           console.log(values.email)
           console.log(values.userName)
           console.log(values.password)
        //this.props.history.push(`/`)
    }

    validate(values) {
        console.log("VALIDATION")
        let error = {};
        if (values.email === '' ) {
            error.email = 'Error in email'
            return error;
        }
        else if(values.username === '' ){error.username = 'Error in username';return error;}
        else if(values.password === ''){error.password = 'Error in password';return error;}
        else if (values.password.length < 5 && values.password.length > 21) {
            error.email = ''
            error.username = ''
            error.password = 'Password should be atleast 5 chars'
            return error;
        }
        
        //console.log(values.targetDate)
        // console.log(new Date().toISOString().split('T')[0])
        //console.log("moment = ", moment().format('YYYY-MM-DD'))
        // if (values.targetDate < moment().format('YYYY-MM-DD'))//new Date().toISOString().split('T')[0])
        // {
        //     error.targetDate = 'please enter todays date'
        // }
        // //console.log(values)
        // return error;
    }

    render(){
        let { username,email,password } = this.state
        return (
            <div className="container">
                <h1>Registration</h1>
                <div className="container">
                {this.state.message && <div className="alert alert-warning">{this.state.message}</div>}
                    <Formik
                    
                        initialValues={{
                            // description(let variables): description(name property),
                            // targetDate: targetDate
                            username, email,password
                        }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="email" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="username" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="password" component="div" className="alert alert-warning" />
                                    {/* bootstrap elements */}
                                    <fieldset className="form-group">
                                        <label>User Name</label>
                                        <Field className="form-control" type="text" name="username"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" type="email" name="email"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="password" name="password"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )   
    }
}