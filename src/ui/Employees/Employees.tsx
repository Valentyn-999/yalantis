import React, {FormEvent, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getEmployeesTC} from "../../bll/employees-reducer";
import {AppRootStateType} from "../../bll/store";
import {EmployeeType} from "../../dal/api";
import style from "./Employees.module.css"
import {getEmployeesAC} from "../../bll/birthday-reducer";

export const Employees = () => {
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, Array<EmployeeType>>(s => s.employees.employees)
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    function dynamicSort(property: any) {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a: any, b: any) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    const newState = state.sort(dynamicSort('lastName'))
    // console.log(newState.filter(t => t.lastName.charAt(0).toLowerCase() === "a"))

    const activeHandler = (id: string) => {
        let worker = state.find(el => el.id === id)
        if (worker) {
            dispatch(getEmployeesAC(worker))
        }
    }
    const res = alphabet.map(el => (
        <div key={el} className={style.container}>
            <div className={style.inliner}>
                <div className={style.card}>{el}
                {newState.filter(t => t.firstName.charAt(0).toLowerCase() === el).map(us => (
                    <div onChange={() => {activeHandler(us.id)}} key={us.id}>
                        <span>{us.firstName}</span> <span>{us.lastName}</span>
                        <div>
                            <input type="radio" defaultChecked={true} value="not active" name="active" /> Not Active
                            <input type="radio" value="active" name="active" /> Active
                        </div>
                    </div>

                ))}
                </div>
            </div>
        </div>
    ))


    // const workers = state.map(el => (
    //     <div key={el.id}>
    //         <div>{el.firstName}</div>
    //         <div>{el.lastName}</div>
    //         <div>{el.dob}</div>
    //     </div>
    // ))
    // const alpha = alphabet.map((el) => (
    //     <div key={el}>
    //         {state.map(elem => (
    //             <div className={style.card}>
    //                 <span>{el}
    //                     <div key={elem.id}>
    //                 <div>{elem.firstName}</div>
    //                 <div>{elem.lastName}</div>
    //                 <div>{elem.dob}</div>
    //                     </div>
    //                 </span>
    //             </div>
    //         ))}
    //     </div>
    // ))

    useEffect(() => {
        dispatch(getEmployeesTC())
    }, [dispatch])


    return (
        <>
            {res}
            {/*{alpha}*/}

        </>
    );
}

