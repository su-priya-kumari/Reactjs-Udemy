import React, { useState } from 'react';
import Course from './Course';
const rowData=[
    {
    'title':'php',
    'desc':'testing'
},
    {
    'title':'java',
    'desc':'testing'
},
    {
    'title':'React',
    'desc':'testing'
},
    {
    'title':'Python',
    'desc':'testing'
},
    {
    'title':'php',
    'desc':'testing'
},
]
const CourseLayout = (props) => {
    const[data,setData] = useState();
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {
                        rowData.map((value,index) => {
                            return <div className="col-lg-3"><Course title={value.title} desc={value.desc}></Course></div>
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
export default CourseLayout;