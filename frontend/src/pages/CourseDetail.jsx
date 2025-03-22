import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseDetail } from '../api';
import ProgressBar from '../components/ProgressBar';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const getCourseDetail = async () => {
            const data = await fetchCourseDetail(id);
            setCourse(data);
        };

        getCourseDetail();
    }, [id]);

    if (!course) return <p>Loading...</p>;

    return (
        <div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <ProgressBar progress={course.progress} />
        </div>
    );
};

export default CourseDetail;
