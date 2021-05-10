import axios from "axios";
import {API_URL} from '../../Constants.js'

export const USER_NAME_SESSION_ATTRIBUTE = 'authenticateduser'

class AuthenticationService {

    //using spring security (application properties) details
    executeBasicAuthenticationService(userName, password) {
        console.log("inside the auth")
        return axios.get(`${API_URL}/basicauth`,{ headers: { authorization: this.createBasicAuthToken(userName, password) } }).catch("invalid credentials")
        
    }

    executeJwtAuthenticationService(userName, password) {
        console.log("inside the auth")
        return axios.post(`${API_URL}/authenticate`,
        { 
                "username" : userName,
                "password" : password
        })
        .catch("axios post invalid creds invalid credentials")
        
    }

    registerSuccessfulLoginForJwt(userName,token){
        console.log("JWT REGISTERED")
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE,userName)
        this.setupAxiosInterceptor(this.createJWTToken(token))
    }

    createJWTToken(token) {
        //console.log('Bearer ' + token)
        return 'Bearer ' + token
    }

    createBasicAuthToken(userName, password) {
        //base64 encryption
        return 'Basic ' + window.btoa(userName + ":" + password)
    }

    //setting up the session storage token
    registerSuccessfulLogin(userName, password) {
        console.log("REGISTERED")
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, userName)
        this.setupAxiosInterceptor(this.createBasicAuthToken(userName, password))
    }

    logoutUser() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE);
    }

    getUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE)

        if (user === null) return false

        return user;
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE)

        //console.log("authentication message");

        if (user === null) return false
        return true
    }

    setupAxiosInterceptor(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()