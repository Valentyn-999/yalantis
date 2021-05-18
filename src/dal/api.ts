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

type IsCheckedType  = {
    isChecked: boolean
}
export type EmployeeType2 = EmployeeType & IsCheckedType

export const API = {
    getEmployees() {
        return instance.get('task0/users')
    }
}