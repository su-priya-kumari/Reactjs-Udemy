import React, { useEffect, useState } from 'react';

const AddCourse = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [instructor, setInstructor] = useState("");

    const SubmitData = () => {
        fetch("http://127.0.0.1:8000/api/course/", {
            method:"POST",
            headers: {
                'accept': "application/json",
                'content-type': "application/json"
            },
            body: JSON.stringify({title: title, price: price, instructor: instructor})
        }).then(data => data.json())
    };
    return(
        
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title">Price</label>
                            <input type="text" id="price" className="form-control" onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title">Instructor</label>
                            <input type="text" id="instructor" className="form-control" onChange={(e)=>setInstructor(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-success" onClick={SubmitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AddCourse;