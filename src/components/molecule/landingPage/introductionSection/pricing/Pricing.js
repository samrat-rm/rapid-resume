import React from "react";
import tick from "./../../../../assets/tick.svg";
import wrong from "./../../../../assets/wrong.svg";
import greenTick from "./../../../../assets/greenTick.svg";
import { Link } from "react-router-dom";
// import backgroundImage from "";

const PricingPlan = () => {
    return (
        <div className="flex flex-col bg-pricingPageBg bg-no-repeat bg-contain mx-auto justify-around items-center p-5 rounded-xl relative">
            <h4 className="font-semibold mb-2">Pricing</h4>
            <h2 className="text-3xl font-bold mb-20 ">Choose the right plan</h2>
            <div className="flex justify-start items-center  ">
                {/* Free Plan */}
                <div className=" border-[#F2F2F2] bg-white min-w-80 p-10 flex flex-col justify-start items-center shadow-2xl  ">
                    <h4 className="text-2xl mb-4 ">Free Plan</h4>
                    <h1 className=" text-[#3B43F2] mb-6  font-semibold text-5xl ">
                        $ 0
                    </h1>
                    <ul className="self-start mb-4 ">
                        <li className="flex gap-5 mb-3   items-center">
                            <img src={greenTick} alt="" />
                            <p className="text-xl ">Limited Themes</p>
                        </li>
                        <li className="flex gap-5 mb-3  items-center">
                            <img src={greenTick} alt="" />
                            <p className="text-xl ">Reorder Section</p>
                        </li>
                        <li className="flex gap-5 mb-3  items-center">
                            <img src={wrong} alt="" />
                            <p className="text-xl text-[#AEB7C1] text-semibold ">
                                Add your Video
                            </p>
                        </li>
                        <li className="flex gap-5 mb-3  items-center">
                            <img src={wrong} alt="" />
                            <p className="text-xl text-[#AEB7C1]">
                                Create Sharable Link
                            </p>
                        </li>
                        <li className="flex gap-5 mb-3  items-center">
                            <img src={wrong} alt="" />
                            <p className="text-xl text-[#AEB7C1]">
                                Resize Fonts
                            </p>
                        </li>
                    </ul>
                    <Link to="/dashboard">
                        <button
                            type="button"
                            className="py-3 px-5 text-xl text-white rounded-full bg-gradient-to-r from-cyan-500 to-[#459EFF] "
                        >
                            Make Resume
                        </button>
                    </Link>
                </div>
                {/* Paid Plan */}
                <div className="relative bg-gradient-to-tr from-bgPurple to-bgPink rounded-lg -ml-5  min-w-96 p-10 flex flex-col justify-start items-center mb-3 overflow-x-hidden overflow-y-hidden shadow-2xl ">
                    <div className="absolute  h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-bgBlue to-bgPurple top-10 -right-40 z-0  "></div>
                    <h4 className="text-lg mb-4 text-white z-10 ">
                        Premium Plan
                    </h4>
                    <h1 className=" text-white mb-6  font-semibold text-5xl z-10">
                        $ 9 /yr
                    </h1>
                    <ul className="self-start mb-4 z-10">
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-xl text-white">Endless Themes</p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-xl text-white">
                                Reorder Section
                            </p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-xl text-white">Add your Video</p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-xl text-white">
                                Create Sharable Link
                            </p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-xl text-white">
                                Resize Fonts {"&"} change color
                            </p>
                        </li>
                    </ul>
                    <Link to="/payments">
                        <button
                            type="button"
                            className="p-3 px-5 text-[#459EFF] rounded-full bg-white"
                        >
                            Buy Premium
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
