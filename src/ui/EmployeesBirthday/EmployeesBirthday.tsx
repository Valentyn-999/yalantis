import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {EmployeeType2} from "../../dal/api";

export const EmployeesBirthday = () => {
    const state = useSelector<AppRootStateType, Array<EmployeeType2>>(s => s.team.employeesBirthday)

    const newState = state.map((el) => (
        <div key={el.id}>
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