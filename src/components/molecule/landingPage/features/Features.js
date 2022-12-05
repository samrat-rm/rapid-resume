import React from "react";
import fast from "./../../../../assets/fast.svg";
import addVideo from "./../../../../assets/addVideo.svg";
import efficient from "./../../../../assets/efficient.svg";
import targeted from "./../../../../assets/targeted.svg";

const Features = () => {
    return (
        <div
            id="features"
            className="flex md:flex-row flex-col justify-around items-center w-[90%] h-[50%] md:w-[90%] lg:w-[1200px] md:h-[60%] mb-32 gap-3 md:gap-5 mt-24 md:mt-32 ml-0 md:ml-20 mr-0 md:mr-40 pl-8  mx-0 lg:mx-[20%] md:pl-40 "
        >
            <div className=" relative h-[100%] w-[130%]">
                <div className="flex md:flex-row flex-col justify-start items-center gap-4 md:gap-12 ">
                    <div className="flex flex-col justify-start items-center gap-4 mt-0 ">
                        <div className="flex border-2 gap-3 mr-auto ml-auto md:justify-start flex-col items-center h-72 w-52 mx-auto md:mx-0 md:h-72 rounded-lg  md:w-40 p-3 bg-white ">
                            <img
                                src={fast}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="fast icon"
                            />
                            <h3 className="text-xl font-semibold mb-1">Fast</h3>
                            <p className="text-sm text-center text-[#6D7783]">
                                Create your industry fit resume ready to be
                                shared with a sharable link within minutes
                            </p>
                        </div>
                        <div className="flex border-2 gap-3 mr-auto ml-auto md:justify-start flex-col items-center h-72 w-52 mx-auto md:mx-0 md:h-72 rounded-lg  md:w-40 p-3 bg-white ">
                            <img
                                src={addVideo}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="addVideo icon"
                            />
                            <h3 className="text-xl font-semibold mb-1">
                                Add Video
                            </h3>
                            <p className="text-sm text-center text-[#6D7783]">
                                Standout amongst others by including your
                                introductory video visible with the sharable
                                link you create !
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-4 mt-10 sm:mt-52 md:mt-72 ">
                        <div className="flex border-2 gap-3 mr-auto ml-auto md:justify-start flex-col items-center h-72 w-52 mx-auto md:mx-0 md:h-72 rounded-lg  md:w-40 p-3 bg-white ">
                            <img
                                src={targeted}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="targeted icon"
                            />
                            <h3 className="text-xl font-semibold mb-1 ">
                                Targeted
                            </h3>
                            <p className="text-sm text-center text-[#6D7783]">
                                With plathora of designs and templates, create
                                resumes that target your industry
                            </p>
                        </div>
                        <div className="flex border-2 gap-3 mr-auto ml-auto md:justify-start flex-col items-center h-72 w-52 mx-auto md:mx-0 md:h-72 rounded-lg  md:w-40 p-3 bg-white ">
                            <img
                                src={efficient}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="efficient icon"
                            />
                            <h3 className="text-xl font-semibold mb-1 ">
                                Efficient
                            </h3>
                            <p className="text-sm mt-6 text-center text-[#6D7783]">
                                Basic RapidResume functionality is free forever
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute top-28 right-0 -left-24 h-[630px] w-[630px] md:bg-gradient-to-r md:from-bgPurple md:to-bgPink  rounded-full overflow-hidden  -z-10  ">
                    <div className=" md:block hidden bg-gradient-to-r from-bgBlue to-bgPurple rounded-full min-h-[50%] ml-[50%] min-w-[50%]  top-20 -right-10"></div>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <h5 className="text-lg font-semiold">Features</h5>
                <h2 className="text-5xl font-bold leading-[3.5rem]">
                    Expect great features
                </h2>
                <p className="mt-10 text-[#6D7783]">
                    RapidResume caters to your needs by providing you the best
                    in class resume editer with eleagnt fonts, exquisite designs
                    and comforting color schemes
                </p>
            </div>
        </div>
    );
};

export default Features;
