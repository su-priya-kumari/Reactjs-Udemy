import React from 'react';
import {Link} from 'react-router-dom';

const CourseView = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <p className="lead">Welcome</p>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img src="" alt=""/>
                        <div className="card-body">
                            <h5>This is title</h5>
                            <Link to="/course/view" className="btn btn-success d-block">Let's Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseView;