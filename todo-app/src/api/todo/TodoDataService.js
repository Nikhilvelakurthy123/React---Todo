import axios from 'axios'
import {API_URL,JPA_API_URL} from '../../Constants.js'


class TodoDataService {
    //using jpa(database)
    tdodListJpa(name){
        console.log("name = "+name)
        return axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }

    getTodoJpa(name,id){
        //console.log("helloWorldPathVariable")
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
    updateTodoJpa(name,id,todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo)
    }

    createTodoJpa(name,todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`,todo)
    }

    deleteTodoJpa(name,id){
        //console.log("helloWorldPathVariable")
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    //non jpa
    tdodList(name){
        console.log("name = "+name)
        return axios.get(`${API_URL}/users/${name}/todos`)
    }

    deleteTodo(name,id){
        //console.log("helloWorldPathVariable")
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }

    getTodo(name,id){
        //console.log("helloWorldPathVariable")
        return axios.get(`${API_URL}/users/${name}/todos/${id}`)
    }
    

    updateTodo(name,id,todo){
        return axios.put(`${API_URL}/users/${name}/todos/${id}`,todo)
    }

    createTodo(name,todo){
        return axios.post(`${API_URL}/users/${name}/todos/`,todo)
    }


    //registration

    getTodoRegistered(name,password,email){
        console.log("getTodoRegistered message")
        return axios.post(`http://localhost:8084/registeruser`,
            {
                "userName":name,
                "email":email,
                "password":password
            }
            )
    }
}

export default new TodoDataService()