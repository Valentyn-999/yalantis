import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import {API, EmployeeType, EmployeeType2} from "../dal/api";
import {AxiosResponse} from "axios";


const initialState = {
    employees: [] as Array<EmployeeType2>,
    employeesBirthday: [] as Array<EmployeeType2>
}


export type InitialStateType = typeof initialState


export const employeesReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case getEmployees:
            let a = {
                ...state, employees: action.data.map((el: any) => {
                    return {...el, isChecked: false}
                })
            }
            return a


        case addEmployees: {
            let b = {
                ...state,
                employeesBirthday: state.employees.map((el) => {
                    if (el.id === action.data.id) {
                        return {...el, isChecked: true}
                    } else {
                        return el
                    }
                })
            }
            return b
        }
        case removeEmployees: {
            let c  = {
                ...state,
                // employeesBirthday
            }
            debugger
            return state
            // return {...state, bthEmployees: state.bthEmployees.filter(el => el !== action.data)}
        }

        default:
            return state
    }
}


type ActionsType = any
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>


//ac
export const getEmployeesAC = (data: Array<EmployeeType2>) => ({type: getEmployees, data} as const)

export const addEmployeesBirhdayAC = (data: EmployeeType) => ({type: addEmployees, data} as const)

//tc
export const getEmployeesTC = (): ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
    API.getEmployees()
        .then((res: AxiosResponse<Array<EmployeeType2>>) => {
            const {data} = res
            dispatch(getEmployeesAC(data))
        })
}

const getEmployees = 'getEmployees'
const addEmployees = 'addEmployees'
const removeEmployees = 'removeEmployees'

