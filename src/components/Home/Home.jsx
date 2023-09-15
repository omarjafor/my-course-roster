import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])
    return (
        <div className="flex">
            <div className="grid grid-cols-3 gap-6">
                {
                    courses.map(course => (<Card
                        key={course.id}
                        course={course}
                    ></Card>))
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;