import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const CourseView = () => {
    let {id} = useParams();
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/course/${id}`)
        .then(response => response.json())
        .then(data => setCourseData(data))
      },)
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-9">
                    <p className="lead">{courseData.description}</p>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img src="" alt=""/>
                        <div className="card-body">
                            <h5>{courseData.title}</h5>
                            <Link to="/course/view" className="btn btn-success d-block">Let's Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseView;