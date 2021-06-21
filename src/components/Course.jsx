import React from 'react';
import {Link} from 'react-router-dom';

const Course = (props) => {
    const deleteData = (id) => {
        fetch(`http://127.0.0.1:8000/api/course/${id}`, {
            method:"DELETE"
        }).then(res => res.json()) 
    }
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
                    <button className="btn btn-danger float-end" onClick={()=>deleteData(props.id)}>Delete</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Course;