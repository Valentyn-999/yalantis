import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {EmployeeType2} from "../../dal/api";
import style from "./EmployeesBirthday.module.css"
import {months} from "../../bll/helper";


// const months = [ "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December" ];


export const EmployeesBirthday = () => {
    const state = useSelector<AppRootStateType, Array<EmployeeType2>>(s => s.team.employeesBirthday)
    let arrOfMonths: Array<string> = []

    const newDate = state.map(date => {
        const parts = date.dob.split('T')[0].split("-").reverse()
        return `${Number(parts[0])} ${months[Number(parts[1]) - 1]} ${parts[2]} year`
    })

    newDate.map(el => (
        arrOfMonths.push(el.split(' ')[1])
    ))
    // @ts-ignore
    let uniqueChars = [...new Set(arrOfMonths)];

    function sortByMonth(arr: Array<string>) {
        let months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        arr.sort(function (a, b) {
            return months.indexOf(a) - months.indexOf(b);
        });
    }

    sortByMonth(uniqueChars)

    const newState = state.map(employee => {
        const parts = employee.dob.split('T')[0].split("-").reverse()
        const correctDate = `${Number(parts[0])} ${months[Number(parts[1])]} ${parts[2]} year`

        return (
            <div key={employee.id} className={style.container}>
                <span>{employee.firstName}</span> <span>{employee.lastName}
            </span> - <span>{correctDate}</span>
            </div>
        )
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