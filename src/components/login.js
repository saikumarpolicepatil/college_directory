import React, {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const login = () => {
    const [credentials, setCredentials] = useState({username: '', password : '', role: 'STUDENT'});
    const history = useHistory();

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', credentials);
            if(res.data.role == 'STUDENT') history.push('/student-dashboard');
            else if(res.data.role == 'FAULTY-MEMBER') history.push('/faculty-dashboard');
            else if(res.data.role == 'ADMINISTRATOR') history.push('/admin-dashboard');
        }catch(err){
            console.error('Login failed: ', err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input tyep = "text" name = "username" placeholder="Username" onChange={handleChange} />
          <input type = "password" name = "password"  placeholder="Password" onChange={handleChange} />
          <select name = "role" onChange={handleChange}>
            <option value = "STUDENT">Student</option>
            <option value = "FAULTY-MEMBER">Faculty-member</option>
            <option value = "ADMINISTRATOR">Administrator</option>
          </select>
          <button type = "submit">Login</button>
        </form>
    );
}

export default login;