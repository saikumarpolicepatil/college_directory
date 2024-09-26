import React, {useState, useEffect} from "react";
import axios from 'axios';

const FacultyDashBoard = () => {
    const [courses, setCourses] = useState([]);
    const [gradeInfo, setgradeInfo] = useState({studentId: '', courseId: '', grade: ''});

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const response = await axios.get('http://localhost:5000/faculty/courses');
        setCourses(response.data);
    }

    const updateGrade = async () => {
        await axios.post('http://localhost:5000/faculty/grade-student', gradeInfo);
        setgradeInfo({ studentId: '', courseId: '', grade: ''});
    };

    return (
        <div>
            <h2>Faculty Dashboard</h2>
            <h3>update Student Grade</h3>

            <input type = "text" placeholder="Student Id" value={gradeInfo.studentId} onChange={(e) => 
                setgradeInfo({ ...gradeInfo, studentId: e.target.value})} />

            <input type = "text" placeholder="Course Id" value={gradeInfo.courseId} onChange={(e) => 
            setgradeInfo({ ...gradeInfo, courseId: e.target.value})} />

            <input type = "text" placeholder="Grade" value={gradeInfo.grade} onChange={(e) => 
                setgradeInfo({ ...gradeInfo, grade: e.target.value})} />
            <button onClick={updateGrade}>Update Grade</button>

            <h3>Your Courses</h3>
            <ul>
                {courses.map((course) => {
                    <li key={course.id}>{course.name}</li>
                })}
            </ul>
        </div>
    );
};