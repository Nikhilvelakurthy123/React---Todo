import axios from 'axios'
import { API_URL } from '../../Constants.js'//https://localhost:8084
class HelloWorldService {

    executeHelloWorldService() {
        return axios.get(API_URL)
    }
    executeHelloWorldBeanService() {
        //console.log("bean")
        return axios.get(`${API_URL}/bean`)
    }
    helloWorldPathVariable(name) {
        //console.log("helloWorldPathVariable")
        return axios.get(`${API_URL}/bean/helloWorldPathVariable/${name}`)
    }
    tdodList(name) {
        //console.log("helloWorldPathVariable")
        return axios.get(`${API_URL}/users/${name}/todos`)
    }

    
    sendEmailService(){
        console.log("Service hit")
        return axios.get(`${API_URL}/mail`)
    }

}

export default new HelloWorldService()