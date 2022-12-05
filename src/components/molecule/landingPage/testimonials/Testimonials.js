import React, { useRef } from "react";
import review from "./../../../../assets/review.svg";
import left from "./../../../../assets/left.svg";

import "./testimonials.css";
const Testimonials = () => {
    let ref = useRef();
    const slide = (shift) => {
        ref.current.scrollLeft += shift;
    };
    function scrollLeft() {
        slide(-110);
    }
    function scrollRight() {
        slide(+110);
    }
    const avatars = [
        {
            name: "Prosper Otemuyiwa",
            url: "https://bit.ly/prosper-baba",
            review: "",
        },
        {
            name: "Ryan Florence",
            url: "https://bit.ly/ryan-florence",
            review: "",
        },
        {
            name: "Christian Nwamba",
            url: "https://bit.ly/code-beast",
            review: "",
        },
        {
            name: "Kent Dodds",
            url: "https://bit.ly/kent-c-dodds",
            review: "",
        },
        {
            name: "Segun Adebayo",
            url: "https://bit.ly/sage-adebayo",
            review: "",
        },
    ];
    return (
        <div className="flex flex-col justify-start items-start w-auto h-auto py-24 pl-12 md:pl-60 pr-0 bg-gradient-to-r from-bgPurple text-white to-bgPink  ">
            <h3 className="mb-5 text-lg">Testimonials</h3>
            <h2 className="text-3xl font-bold mb-16 ">
                Words from satisfied users
            </h2>
            <section
                ref={ref}
                className="flex justify-start items-center scroll-smooth scrollBarRemover  flex-nowrap gap-10 overflow-x-scroll max-w-[80vw]"
            >
                {avatars.map((avatar, ind) => (
                    <div
                        key={ind}
                        className="bg-white rounded-2xl shadow-2xl h-[270px] min-w-[290px] max-w-[300px] py-2 px-4 flex flex-col justify-start items-center "
                    >
                        <img
                            src={review}
                            alt=""
                            className="h-14 mt-3 w-14 mb-4 "
                        />
                        <p className="text-[#6D7783] text-center mb-4 text-[14px] ">
                            Graphical user interface strategy lean startup
                            ecosystem disruptive launch party interaction design
                            infographic series A financing release innovator.
                        </p>
                        <div className="flex mt-2 self-start ml-3 text-black items-center">
                            <img
                                src={avatar.url}
                                className=" w-10 h-auto mr-6 rounded-full  drop-shadow-lg"
                                alt=""
                            />
                            <div>
                                <h3 className="text-md ">{avatar.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <div className="mt-10 ml-[70vw] ">
                <button onClick={scrollLeft}>
                    <img className="h-5 w-5" src={left} alt="" />
                </button>

                <button onClick={scrollRight}>
                    <img
                        src={left}
                        className="h-5 ml-7 w-5 rotate-180 "
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
