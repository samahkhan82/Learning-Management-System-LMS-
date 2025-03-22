import { useEffect, useState } from 'react';
import { fetchUserCourses } from '../api';
import CourseCard from '../components/CourseCard';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getUserCourses = async () => {
            const data = await fetchUserCourses();
            setCourses(data);
        };

        getUserCourses();
    }, []);

    return (
        <div>
            <h1>My Dashboard</h1>
            <h2>Enrolled Courses</h2>
            <div className="course-list">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard key={course._id} course={course} />
                    ))
                ) : (
                    <p>You haven't enrolled in any courses yet.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
