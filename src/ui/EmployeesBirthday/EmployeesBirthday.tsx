import React, {FormEvent, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {EmployeeType} from "../../dal/api";

export const EmployeesBirthday = () => {
    const state = useSelector<AppRootStateType, Array<EmployeeType>>(s => s.employeesBth.bthEmployees)

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