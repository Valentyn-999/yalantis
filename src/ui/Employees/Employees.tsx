import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addEmployeesBirhdayAC, getEmployeesTC} from "../../bll/employees-reducer";
import {AppRootStateType} from "../../bll/store";
import {EmployeeType2} from "../../dal/api";
import style from "./Employees.module.css"
import {removeEmployeesAC} from "../../bll/birthday-reducer";

export const Employees = () => {
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, Array<EmployeeType2>>(s => s.employees.employees)
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


    //e: React.MouseEvent<HTMLInputElement>
    const activeHandler = (id: string, isActive: boolean) => {
        // e.preventDefault()
        // e.stopPropagation()
        let worker = state.find(el => el.id === id)
        if (isActive && worker) {
            dispatch(addEmployeesBirhdayAC(worker))
        } else if ((!isActive && worker)) {
            dispatch(removeEmployeesAC(worker))
        }

    }


    const res = alphabet.map(el => (
        <div key={el} className={style.container}>
            <div className={style.inliner}>
                <div className={style.card}>{el}
                    {newState.filter(t => t.firstName.charAt(0).toLowerCase() === el)
                        .map((us) => {
                            debugger
                                return (
                                    <div key={us.id}>
                                        <span>{us.firstName}</span> <span>{us.lastName}</span>
                                        <div>
                                            <label>
                                                <input onChange={
                                                    () => {
                                                        activeHandler(us.id, false)
                                                    }}
                                                       id={us.id}
                                                       type="radio"
                                                       checked={!us.isChecked}
                                                       name={`active${us.id}`}/>
                                                Not Active
                                            </label>
                                            <label>
                                                <input onChange={() => {
                                                    activeHandler(us.id, true)
                                                }}
                                                       id={"true"}
                                                       type="radio"
                                                       value="on"
                                                       checked={us.isChecked}
                                                       name={`active${us.id}`}/>
                                                Active
                                            </label>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                </div>
            </div>
        </div>
    ))

    useEffect(() => {
        dispatch(getEmployeesTC())
    }, [dispatch])


    return (
        <>
            {res}
        </>
    );
}

