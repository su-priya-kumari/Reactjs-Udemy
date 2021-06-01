import React from 'react';
import Course from './Course';

const CourseLayout = (props) => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"><Course title="Php" desc="testing"/></div>
                    <div className="col-lg-3"><Course title="React" desc="testing"/></div>
                    <div className="col-lg-3"><Course title="Java" desc="testing"/></div>
                    <div className="col-lg-3"><Course title="Python" desc="testing"/></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CourseLayout;