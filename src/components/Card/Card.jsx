const Card = () => {
    return (
        <div>
            <div className="w-[312px] h-[402px] shadow-lg p-4 rounded-lg bg-[#FFF] text-center">
                <figure className="bg-[#1111110D] w-[280px] h-[144px] text-center rounded-lg"><img
                    src="https://i.ibb.co/qJDdBpC/Rectangle-2.png" alt="Tea" /></figure>
                <div className="text-left">
                    <h2 className="text-lg font-semibold mt-4 mb-3"> Introduction to C Programming </h2>
                    <p className="text-sm font-normal leading-6 mb-5 text-[#1C1B1B99]">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <div className="flex justify-around my-2 font-medium text-base gap-3 text-[#1C1B1B99]">
                        <p><img className="inline-block mr-2" src="../../../public/dollar.svg" alt="" width="24px" height="24px" />Price : 15000</p>
                        <p><img className="inline-block mr-2" src="../../../public/credit.svg" alt="" width="24px" height="24px" />Credit : 10hr</p>
                    </div>
                </div>
                <button
                    className="w-full font-semibold rounded-lg p-2 mt-1 bg-[#2F80ED] text-white cursor-pointer text-lg"
                >Select</button>
            </div>
        </div>
    );
};

export default Card;