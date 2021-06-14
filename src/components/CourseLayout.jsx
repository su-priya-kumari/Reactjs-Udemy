import React, { useEffect, useState } from 'react';
import Course from './Course';

const CourseLayout = (props) => {
    const[data,setData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/course/")
        .then(response => response.json())
        .then(data => setData(data))
    });
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    {
                        props.data.map((value,index) => {
                            return <div className="col-lg-3"><Course id={value.id} title={value.title} desc={value.desc}></Course></div>
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
export default CourseLayout;