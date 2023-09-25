import React from 'react'
import Course from './Course'
export default function Courses({ list, openDialog }) {
    return (
        <ul className='d-flex mt-2' style={{
            flexWrap: "wrap",
            gap: 30
        }}>
            {
                list.map((item) => (
                    <Course key={item.id} course={item}  openDialog={openDialog} />
                ))
            }
        </ul>
    )
}
