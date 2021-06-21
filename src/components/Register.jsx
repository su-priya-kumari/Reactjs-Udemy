import React, { useEffect, useState } from 'react';

const Register = () => {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const Signup = () => {
        fetch("http://127.0.0.1:8000/api/register/", {
            method:"POST",
            headers: {
                'accept': "application/json",
                'content-type': "application/json"
            },
            body: JSON.stringify({name: name, email: email, password: password})
        }).then(data => data.json()).then(alert => console.log("Successfully Signup")).then(clear());
    };
    const clear = () => {
        setName("");;
        setEmail("");
        setPassword("");
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 offset-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="">Username</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-success" onClick={Signup}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;