import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                courses.map(course => (<Card
                    key={course.id}
                    course={course}
                ></Card>))
            }
        </div>
    );
};

export default Home;