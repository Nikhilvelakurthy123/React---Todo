import React, { Component } from 'react'
import moment from 'moment'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

export default class TodoListUpdateComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.input = React.createRef();
        this.input = this.props.match.params.id

        this.onSubmit = this.onSubmit.bind(this)
        // this.loadData = this.loadData.bind(this)

        // this.loadData()
    }

    componentDidMount() {
        //this.setState({id : this.props.match.params.id})
        //console.log("did mount")
        //console.log("reference variable = ",this.input.current.value)
        //console.log(AuthenticationService.getUserName())
        //console.log(TodoDataService.getTodo(AuthenticationService.getUserName(), this.state.id))
        //this.setState({description:"hello world"})    

        if (this.state.id === -1) {
            return
        }
        else {
            TodoDataService.getTodoJpa(AuthenticationService.getUserName(), this.state.id)
                .then(response => this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                }))
                .catch(error => console.log(error))

            console.log("description - " + this.state.description)
        }
    }

    //onsubmit and validate are formik functions

    onSubmit(values) {
        // console.log("forms")
        // console.log(values)
        let userName = AuthenticationService.getUserName();

        if (this.state.id === -1) {
            TodoDataService.createTodoJpa(userName, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(() =>
                this.props.history.push('/todos'))
        }
        else {
            TodoDataService.updateTodoJpa(userName, this.state.id, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(() =>
                this.props.history.push('/todos'))
        }
        //this.props.history.push(`/todolistupdate/${id}`)
    }

    validate(values) {
        let error = {};
        if (!values.description) {
            error.description = 'Error in Description'
        }
        else if (values.description.length < 5) {
            error.description = 'Enter atleast 5 chars'
        }
        console.log(values.targetDate)
        // console.log(new Date().toISOString().split('T')[0])
        console.log("moment = ", moment().format('YYYY-MM-DD'))
        if (values.targetDate < moment().format('YYYY-MM-DD'))//new Date().toISOString().split('T')[0])
        {
            error.targetDate = 'please enter todays date'
        }
        //console.log(values)
        return error;
    }

    render() {
        // let description = this.state.description
        // let targetDate = this.state.targetDate
        //or
        let { description, targetDate } = this.state
        return (
            <div>
                <h1>Update ToDo</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            // description(let variables): description(name property),
                            // targetDate: targetDate
                            description, targetDate
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
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    {/* bootstrap elements */}
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
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