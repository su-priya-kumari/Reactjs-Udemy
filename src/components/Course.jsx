import React from 'react';

const Course = (props) => {
    return(
        <React.Fragment>
            <div className="card mt-5">
                <img src={props.img} alt=""/>
                <div className="card-body">
                    <h2>{props.title}</h2>
                    <p className="lead">{props.desc}</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Course;