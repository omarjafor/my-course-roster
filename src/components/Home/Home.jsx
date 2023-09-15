import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalCredit, setTotalCredit] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])

    const handleAddCourse = course => {
        let temp = course.credit;
        selectedCourse.forEach(courseItem => {
            temp += courseItem.credit;
        })    
        setTotalCredit(temp);
        setSelectedCourse([...selectedCourse, course]);
    }
    return (
        <div className="flex">
            <div className="grid grid-cols-3 gap-6">
                {
                    courses.map(course => (<Card
                        key={course.id}
                        course={course}
                        handleAddCourse={handleAddCourse}
                    ></Card>))
                }
            </div>
            <div>
                <Cart
                    selectedCourse = {selectedCourse}
                    totalCredit={totalCredit}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;