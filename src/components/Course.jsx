import React from 'react';
import {Link} from 'react-router-dom';

const Course = (props) => {
    return(
        <React.Fragment>
            <div className="card mt-5">
                <img src={props.img} alt=""/>
                <div className="card-body">
                    <h2>{props.title}</h2>
                    <p className="lead">{props.desc}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/course/${props.id}`} className="btn btn-success">Read More</Link>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Course;