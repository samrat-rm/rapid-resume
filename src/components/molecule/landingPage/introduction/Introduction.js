import React from "react";
import Resumes from "./../../../../assets/resumes.png";
import { Link } from "react-router-dom";

const Introduction = () => {
    return (
        <div className="flex  pt-[0px] md:flex-row flex-col md:pt-[75px] box-border relative px-[3rem] md:px-[10rem] justify-around z-0 pb-[10%] ">
            <div className=" w-[300px] h-[300px] md:diaplay md:w-[500px] sm:w-[400px] sm:h-[400px]  md:h-[500px] bg-gradient-to-r from-bgBlue to-bgPurple absolute md:top-52 -bottom-8 z-10 -right-24 rounded-full"></div>
            <div className="md:w-[35rem] md:h-[35rem] lg:h-[38%] lg:w-[38%] lg:mt-[10%] mt-0 w-full h-autos pt-20 z-10 flex flex-col items-start text-white">
                <h2 className="lg:text-6xl md:text-[35px] text-[30px] leading-[2.5rem] pb-4 sm:text-[35px] md:leading-[4.25rem] sm:leading-[2rem] lg:pb-8 sm:pb-6  ">
                    Create your resume for free in minutes.
                </h2>
                <p className="text-1xl lg:text-2xl text-white">
                    Showcase yourself and your achievements with and impressive
                    resume made with the free online resume maker RapidResume
                </p>
                <div className="ml-0 mt-10 self-end mr-5 ">
                    <Link to="/login">
                        <button className="bg-gradient-to-t from-bgBlue to-sky-700 px-8 py-2 hover:text-white  rounded-2xl mr-5 ">
                            Login
                        </button>
                    </Link>
                    <Link to="signup">
                        <button className="bg-gradient-to-t from-bgBlue to-sky-700 hover:text-white px-8 py-2 rounded-2xl ml-5 ">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
            <img
                src={Resumes}
                alt="resume banner"
                className="z-10 md:mt-12 max-w-[500px] mt-16 w-[90%] md:w-5/12 h-fit "
            />
        </div>
    );
};

export default Introduction;
