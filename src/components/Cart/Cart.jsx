const Cart = ({ selectedCourse, totalCredit }) => {
    return (
        <div>
            <div className="md:ml-0 lg:ml-6 shadow-lg rounded-xl bg-[#FFF] p-6">
                <h2 className="text-lg text-[#2F80ED] font-bold pb-4 border-b border-solid border-[#11111126]">Credit Hour Remaining 7 hr</h2>
                <div className="font-medium text-2xl leading-[48px] mt-4 pb-6 border-b border-solid border-[#11111126]">
                    <h2 className="text-xl text-[#1C1B1B] font-bold pb-4">Course Name</h2>
                    {
                        selectedCourse.map(course => <li key={course.id} className="list-decimal text-base text-[#1C1B1B99]"> {course.name} </li>)
                    }
                </div>
                <h2 className="text-[#1C1B1BCC] font-semibold pb-4 mt-4 border-b border-solid border-[#11111126]">Total Credit Hour : {totalCredit} </h2>
                <h2 className="text-[#1C1B1BCC] font-semibold pb-4 mt-4">Total Price : 48000 USD</h2>
            </div>
        </div>
    );
};

export default Cart;