import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getAllStudent} from "../redux/action/student";

export function List() {
    const students = useSelector(state => state.students)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudent())
    }, [])

    return (
        <>
            <h1>List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Languages</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.gender == 1 ? 'Male' : 'Female'}</td>
                            <td>{student.languages}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
