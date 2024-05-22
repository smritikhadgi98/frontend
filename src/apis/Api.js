import axios from "axios";

// Creating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Test API 
export const testApi = () => Api.get('/test')

export const registerUserApi = (data) => Api.post("api/user/create", data)

//login api
export const loginUserApi=(data)=> Api.post("api/user/login",data)

// "http://localhost:5000/test"

