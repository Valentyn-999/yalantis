import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {EmployeeType, EmployeeType2} from "../dal/api";


const initialState = {
    bthEmployees: [] as Array<EmployeeType2>
}


export type InitialStateType = typeof initialState


export const birthdayReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case getEmployee: {
            let res =  {
                ...state,
                bthEmployees: [...state.bthEmployees, {...action.data, isChecked: true}  ]
            }
            return res
        }
        case removeEmployees: {
            return {...state, bthEmployees: state.bthEmployees.filter(el => el !== action.data)}
        }
        default:
            return state
    }
}


type ActionsType = any
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>


//ac
// export const getEmployeesAC = (data: EmployeeType) => ({type: getEmployee, data} as const)
export const removeEmployeesAC = (data: EmployeeType) => ({type: removeEmployees, data} as const)


const getEmployee = 'getEmployee'
const removeEmployees = 'removeEmployees'

