import React, { useState } from "react";
import tick from "./../../../assets/tick.svg";
import wrong from "./../../../assets/wrong.svg";
import greenTick from "./../../../assets/greenTick.svg";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../globals/config/firebaseStorage/userData";
import jsCookies from "js-cookies";

const PricingPlan = ({ id, setLoginData }) => {
    let [paymentId, setPaymentId] = useState("");
    let navigate = useNavigate();
    function razorPayFunction() {
        let options = {
            key: "rzp_test_38uGZyi4iVI499",
            key_secret: "OXJEuGiezh15zbNUluleIzti",
            amount: 720 * 100,
            currency: "INR",
            name: "Premium Plan ",
            description: "premium plan for rapid resume",
            handler: function (response) {
                setPaymentId(response.razorpay_payment_id);
                //console.log("payment success", paymentId);
            },
            prefill: {
                name: "samrat",
                email: "samratrm2@gmail.com",
                contact: "9952409222",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#6861D8",
            },
        };
        updateUser(id, { preminum: true });
        const pay = new window.Razorpay(options);
        pay.open();
        console.log(
            "Razor pay window will close after 5 sec and redirect to dashboard"
        );
        setLoginData((prev) => {
            let updatedLoginData = {
                ...prev,
                isPremiumUser: true,
            };
            jsCookies.setItem("loginData", JSON.stringify(updatedLoginData));
            console.log(
                "finalll ",
                updatedLoginData,
                "from cookies",
                JSON.parse(jsCookies.getItem("loginData"))
            );
            return updateUser;
        });
        setTimeout(() => {
            pay.close();
            navigate(`/dashboard/user/${id}`);
        }, 5000);
    }
    // function handleDashboardRedirect() {}
    return (
        <div
            id="pricing"
            className="flex flex-col rounded-2xl bg-no-repeat bg-contain mx-auto justify-around items-center p-5  relative"
        >
            {console.log(">>>>>>", id)}
            <h4 className="font-semibold mb-2">Pricing</h4>
            <h2 className="text-3xl font-bold mb-20 ">Choose the right plan</h2>
            <div className="flex justify-start items-center  ">
                {/* Free Plan */}
                <div className=" border-[#F2F2F2] rounded-2xl bg-white min-w-80 p-10 flex flex-col justify-start items-center shadow-2xl  ">
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
                    <button
                        type="button"
                        // onClick={handleDashboardRedirect}
                        className="py-3 px-5 text-xl text-white rounded-full bg-gradient-to-r from-cyan-500 to-[#459EFF] "
                    >
                        Make Resume
                    </button>
                </div>
                {/* Paid Plan */}
                <div className="relative bg-gradient-to-tr from-bgPurple to-bgPink rounded-xl -ml-5  min-w-96 p-10 flex flex-col justify-start items-center  mb-3 overflow-x-hidden overflow-y-hidden shadow-2xl shadow-black ">
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
                    <button
                        type="button"
                        className="p-3 px-5 text-[#459EFF] rounded-full bg-white"
                        onClick={() => razorPayFunction()}
                    >
                        Buy Premium
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
