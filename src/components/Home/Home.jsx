import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [remaining, setRemaining] = useState(20);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])

    const handleAddCourse = course => {
        let temp = course.credit;
        let totalsPrice = course.price;
        let remainCredit = 20;
        const isAdded = selectedCourse.find(crs => (crs.id == course.id))

        if (isAdded) {
            return toast('Already Added! Try Another Course')
        } else {
            selectedCourse.forEach(price => {
                totalsPrice += price.price;
            })

            selectedCourse.forEach(courseItem => {
                temp += courseItem.credit;
            })
        }
        remainCredit -= temp;
        if(remainCredit < 0){
            toast('Your Credit Hours Exceded')
        }else{
            setRemaining(remainCredit);
            setTotalPrice(totalsPrice);
            setTotalCredit(temp);
            setSelectedCourse([...selectedCourse, course]);
        }
    }
    return (
        <div className="flex flex-col gap-6 md:gap-6 lg:gap-0 md:flex-col lg:flex-row">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    courses.map(course => (<Card
                        key={course.id}
                        course={course}
                        handleAddCourse={handleAddCourse}
                    ></Card>))
                }
                <ToastContainer />
            </div>
            <div>
                <Cart
                    selectedCourse = {selectedCourse}
                    totalCredit = {totalCredit}
                    totalPrice = {totalPrice}
                    remaining={remaining}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;