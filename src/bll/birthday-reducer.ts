import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {EmployeeType} from "../dal/api";


const initialState = {
    bthEmployees: [] as Array<EmployeeType>
}


export type InitialStateType = typeof initialState


export const birthdayReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case getEmployee: {
            const arr = []
            arr.push(action.data)
            return {
                ...state, bthEmployees:state.bthEmployees.concat(arr)
            }
        }
        default:
            return state
    }
}


type ActionsType = any
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>


//ac
export const getEmployeesAC = (data: EmployeeType) => ({ type: getEmployee, data } as const )

//tc
// export const getEmployeesTC = ():ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
//     API.getEmployees()
//         .then((res: AxiosResponse<Array<EmployeeType>>) => {
//             const {data} = res
//             dispatch(getEmployeesAC(data))
//         })
// }

const getEmployee = 'getEmployee'
