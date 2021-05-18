import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {employeesReducer} from "./employees-reducer";
import {birthdayReducer} from "./birthday-reducer";




const rootReducer = combineReducers({
    employees: employeesReducer,
    employeesBth: birthdayReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
