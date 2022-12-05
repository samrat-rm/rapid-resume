import React from "react";
import resumes from "../../../../assets/resumes.png";
import {} from "react-router";
function TryForFree() {
    return (
        <div className="lg:my-[100px] my-[50px] ">
            <div className="my-5 py-5  flex lg:flex-row  flex-col w-screen min-h-fit justify-around lg:px-20 items-center  mb-20 relative lg:mx-20 ">
                <div className="lg:w-[400px] lg:ml-32 ml-9 ">
                    <h4 className="mb-5 text-lg font-semibold ">
                        What are you waiting for ?
                    </h4>
                    <h1 className="mb-10 text-5xl font-bold mt-5 ">
                        Try for free
                    </h1>
                    <p className="text-[#6D7783] text-left text-lg mb-10 ">
                        Ignite your dream career opportunities with our elegant
                        and elegant resume now !
                    </p>
                    <div className="flex justify-center items-baseline gap-10">
                        <a
                            href="/login"
                            className="bg-gradient-to-r rounded-full font-semibold text-lg from-bgPink to-bgBlue py-3 text-white cursor-pointer px-8"
                        >
                            Login
                        </a>
                        <a
                            href="/signup"
                            className="bg-gradient-to-r cursor-pointer rounded-full text-lg font-semibold from-bgPurple to-bgPink py-3 text-white px-8"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
                <img
                    src={resumes}
                    className="w-[35%] min-w-[400px] bg-bgCircle bg-contain bg-no-repeat z-20 lg:mr-10  h-auto p-5 mt-20 "
                    alt=""
                />
            </div>
        </div>
    );
}

export default TryForFree;
