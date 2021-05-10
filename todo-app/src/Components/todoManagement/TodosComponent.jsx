import React, { Component } from 'react'
import moment from 'moment'

import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

export default class TodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo:
                [
                    { id: 1, description: 'Learn Something please', done: false, targetDate: new Date() },
                    { id: 2, description: 'React', done: false, targetDate: new Date() },
                    { id: 3, description: 'JS', done: false, targetDate: new Date() }
                ],
            jsondata: [],
            message:null
            
        }
        
        this.idcounter = 0

        this.deleteTodo = this.deleteTodo.bind(this)
        this.refreshData = this.refreshData.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    componentDidMount() {
        this.idcounter = 0
        this.refreshData()
    }
    refreshData(){
        TodoDataService.tdodListJpa(AuthenticationService.getUserName())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        jsondata: result.data
                    })
                })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>List of TODO'S</h1>
                
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}

                {/* <div className="container" style={{ backgroundColor: "green" }}>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todo.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div> */}
                <h1>FROM BACKEND</h1>
                <div className="container table-responsive">
                    <table className="table table-bordered"  >
                        <thead className="table-dark ">
                            <tr>
                                <th>TO DO</th>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Done?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jsondata.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{++this.idcounter}</td>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('MM-DD-YYYY')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id,todo.userName)} >Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id,todo.userName)} >Delete</button></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                    <div className="container container-responsive">
                        <button onClick={this.addTodo} className="btn btn-success">ADD</button>

                    </div>
                </div>
            </div>
        )
    }

    deleteTodo(id,uname){
        let userName = AuthenticationService.getUserName();
        console.log("asas "+id);

        TodoDataService.deleteTodoJpa(userName,id)
        .then(response => {
            this.setState({message:`Deleted - ${userName}`}) 
            this.refreshData()
        })
        .catch( error => this.setState({message:error.data}))   
    }

    updateTodo(id,uname)
    {
        let userName = AuthenticationService.getUserName();
        console.log("update method "+id);
        console.log("uname"+uname)
        console.log("uname"+userName)
        this.props.history.push(`/todolistupdate/${id}`)//users/{username}/todos/{id}
    }

    addTodo()
    {
        //let userName = AuthenticationService.getUserName();
        // console.log("update method "+id);
        // console.log("uname"+uname)
        // console.log("uname"+userName)
        console.log("add new todo")
        this.props.history.push(`/todolistupdate/-1`)
    }
}
