// The following tools were utilized during this assignment: Claude (helped structure the controlled form and conditional rendering logic based on class example)

import React, { useState , useEffect } from "react";

function StudentForm() {
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [registered, setRegistered] = useState(false);
    const [studentCount, setStudentCount] = useState(0);

    useEffect(() => {
        document.title = `Student ${studentCount}`;
    }, [studentCount]);

    const handleRegister = () => {
        setRegistered(true);
        setStudentCount(studentCount + 1);
    }

    return (
        <div>
            <h2>Student Registration Form</h2>

            <div>
                <label>Student ID: </label>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
            </div>

            <div>
                <label>Student Name: </label>
                <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
            </div>

            <div>
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Course: </label>
                <select value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option value="">Select Course</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Software Engineering">Software Engineering</option>
                </select>
            </div>

            <button onClick={handleRegister}>Register</button>

            {registered && (
                <div>
                    <h3>Registered Student</h3>
                    <p>ID: <strong>{studentId}</strong></p>
                    <p>Name: <strong>{studentName}</strong></p>
                    <p>Email: <strong>{email}</strong></p>
                    <p>Course: <strong>{course}</strong></p>
                </div>
            )}
        </div>
    );
}

export default StudentForm;