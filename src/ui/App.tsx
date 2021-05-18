import React from 'react';
import style from './App.module.css'
import {Employees} from "./Employees/Employees";
import {EmployeesBirthday} from "./EmployeesBirthday/EmployeesBirthday";

export const App = () => {
    return (
        <div className={style.container}>
            <div className={style.employee}>
                <Employees/>
            </div>
            <div className={style.employeebth}>
                <EmployeesBirthday/>
            </div>
        </div>
    );
}

