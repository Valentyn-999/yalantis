import axios from "axios";


const instance  = axios.create ({
    baseURL: 'https://yalantis-react-school-api.yalantis.com/api/',
})

export type EmployeeType = {
    firstName: string
    lastName: string
    dob: string
    id: string
}

export const API = {
    getEmployees() {
        return instance.get('task0/users')
    }
}