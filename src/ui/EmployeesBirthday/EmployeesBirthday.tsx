import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {EmployeeType2} from "../../dal/api";
import style from "./EmployeesBirthday.module.css"


const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];


export const EmployeesBirthday = () => {
    const state = useSelector<AppRootStateType, Array<EmployeeType2>>(s => s.team.employeesBirthday)


    const newState = state.map(el => {
        const parts = el.dob.split('T')[0].split("-").reverse()
        return <div key={el.id} className={style.container}>
            <span>{el.firstName}</span> <span>{el.lastName}</span> - <span>{`${Number(parts[0])} ${months[Number(parts[1])]} ${parts[2]} year`}</span>
        </div>
    })

    return (
        <>
            <h2 className={style.title}>
                Employees birthdays
            </h2>
            <div>
                {newState}
            </div>
        </>
    )
}