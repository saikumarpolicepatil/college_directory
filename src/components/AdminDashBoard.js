import React, { useState, useEffect} from "react";
import axios from "axios";

const AdminDashBoard = () =>{
    const [students, setStudents] = useState([]);
    cosnt [newStudent, setNewStudent] = useState({name: '', email: ''});

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const response = await axios.get('http://localhost:5000/admin/students');
        setStudents(response.data);
    };

    const addStudent = async () => {
        await axios.post('http://localhost:5000/admin/add-student', newStudent);
        fetchStudents();
        setNewStudent({
            name: '', email:''
        });
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
                <input type = "text" placeholder="Student Name" value={newStudent.name} onChange={(e) => 
                    setNewStudent({...newStudent, name: e.target.value})} />
                <input type = "email" placeholder="Student email" value={newStudent.email} onChange={(e) => 
                    setNewStudent({ ...newStudent, email: e.target.value})} />
                <button onClick={addStudent}>Add student</button>
                
                <h3>Students List</h3>
                <ul> {students.map((student) => (
                    <li key ={student.id}>
                        {student.name} - {student.email}
                    </li>

                ))}
                </ul>
        </div>
    );
};

export default AdminDashBoard;