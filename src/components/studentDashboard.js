import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);
  const studentId = 1; // Example student ID, can be dynamic.

  useEffect(() => {
    fetchCourses();
    fetchGrades(studentId);
  }, []);

  const fetchCourses = async () => {
    const response = await axios.get('http://localhost:5000/student/courses');
    setCourses(response.data);
  };

  const fetchGrades = async (id) => {
    const response = await axios.get('http://localhost:5000/student/grades/${id}');
    setGrades(response.data);
  };

  return (
    <div>
      <h2>Student Dashboard</h2>

      <h3>Your Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>

      <h3>Your Grades</h3>
      <ul>
        {grades.map((grade) => (
          <li key={grade.course_id}>
            Course ID: {grade.course_id} - Grade: {grade.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;