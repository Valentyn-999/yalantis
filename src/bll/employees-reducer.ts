import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import {API, EmployeeType} from "../dal/api";
import {AxiosResponse} from "axios";


const initialState = {
    employees: [] as Array<EmployeeType>
}


export type InitialStateType = typeof initialState


export const employeesReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case getEmployees:
            return {...state, employees: action.data}
        default:
            return state
    }
}


type ActionsType = any
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>


//ac
export const getEmployeesAC = (data: Array<EmployeeType>) => ({ type: getEmployees, data } as const )

//tc
export const getEmployeesTC = ():ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
    API.getEmployees()
        .then((res: AxiosResponse<Array<EmployeeType>>) => {
            const {data} = res
        dispatch(getEmployeesAC(data))
    })
}

const getEmployees = 'getEmployees'
