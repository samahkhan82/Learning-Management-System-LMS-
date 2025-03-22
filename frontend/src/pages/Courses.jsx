import { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { fetchCourses } from '../api';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            const data = await fetchCourses();
            setCourses(data);
        };

        getCourses();
    }, []);

    return (
        <div>
            <h1>Available Courses</h1>
            <div className="course-list">
                {courses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
