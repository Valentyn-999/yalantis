import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {EmployeeType2} from "../../dal/api";
import style from "./EmployeesBirthday.module.css"


const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];


export const EmployeesBirthday = () => {
    const state = useSelector<AppRootStateType, Array<EmployeeType2>>(s => s.team.employeesBirthday)
    // if (state[0].dob) {
    //     const ss = state[0].dob.split('T')[0]
    // }


debugger
    const newState = state.map((el) => (
        <div key={el.id} className={style.container}>
            <span>{el.firstName}</span> <span>{el.lastName}</span><br/>
            <span>{el.dob.split('T')[0]}</span>
        </div>
        )
    )

    return (
        <>
            <div>
                {newState}
            </div>
        </>
    )
}