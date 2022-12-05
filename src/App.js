import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import jsCookies from "js-cookies";
import Dashboard from "./components/molecule/dashboard/Dashboard";
import Preview from "./components/molecule/preview/Preview";
import LandingPage from "./components/molecule/landingPage/LandingPage";
import { getAllUsers } from "./globals/config/firebaseStorage/userData";
import Login from "./components/molecule/login/Login";
import Signup from "./components/molecule/signup/Signup";
import Pricing from "./components/molecule/pricing/Pricing";
import { updateUser } from "../src/globals/config/firebaseStorage/userData";
import Header from "./components/atoms/header/Header";
function App() {
    let [pageRef, setPageRef] = useState(useRef());
    useEffect(() => {
        let loginDataFromCookies = JSON.parse(jsCookies.getItem("loginData"));
        console.log("data from cookies", loginDataFromCookies);
        if (!loginDataFromCookies) {
            jsCookies.setItem("loginData", JSON.stringify(loginData));
            console.log(
                "data from Cookies after set",
                JSON.parse(jsCookies.getItem("loginData"))
            );
        } else {
            setLoginData(loginDataFromCookies);
        }
    }, []);
    let contentData = {
        userinfo: {
            profileUrl: "",
            name: "Trevor Doe ",
            profession: "Software Engineer",
            contact: {
                email: "sagarisawesome@gmail.com",
                phone: "11111111",
                linkedin: "linkedin.com/sagarkhatri",
                website: "thisisawesome.com",
            },
        },

        experience: [
            {
                company: "Coding Ninjas",
                designation: "Intern",
                duration: "Jun 20 - Dec 20",
            },
            {
                company: "Pepsi Fizz",
                designation: "Sr. Software Engineer",
                duration: "Jan 21- present",
            },
            {
                company: "Pepsi Fizz",
                designation: "Sr. Software Engineer",
                duration: "Jan 21- present",
            },
            {
                company: "Pepsi Fizz",
                designation: "Sr. Software Engineer",
                duration: "Jan 21- present",
            },
        ],

        education: [
            {
                degree: "Masters of Computer Applications",
                college: "MMMUT",
                duration: "Sep 18 - Aug 21",
                score: "CGPA 7.8",
            },
            {
                degree: "Masters of Computer Applications",
                college: "MMMUT",
                duration: "Sep 18 - Aug 21",
                score: "CGPA 7.8",
            },
            {
                degree: "Masters of Computer Applications",
                college: "MMMUT",
                duration: "Sep 18 - Aug 21",
                score: "CGPA 7.8",
            },
        ],

        projects: [
            {
                name: "Rapid Resume",
                description:
                    "A SaaS startup thattt lets you create your resume and show case it the world for free.",
            },
            {
                name: "Rapid Resume",
                description:
                    "A SaaS startup thattt lets you create your resume and show case it the world for free.",
            },
            {
                name: "Rapid Resume",
                description:
                    "A SaaS startup thattt lets you create your resume and show case it the world for free.",
            },
            {
                name: "Rapid Resume",
                description:
                    "A SaaS startup thattt lets you create your resume and show case it the world for free.",
            },
        ],

        skills: {
            csv: "Java, React, CSS, Python, OSGI model, Adobe Experience Manager",
        },

        config: {
            fontSize: "smaller",
            fontName: "'Arial', sans-serif",
            headingColor: "#000",
            theme: "Free_Theme1",
            isPremiumUser: true,
        },

        isVisible: {
            contact: true,
            userinfo: true,
            experience: true,
            education: true,
            projects: true,
            skills: true,
        },
    };

    let loginDetails = {
        username: "undefined",
        id: undefined,
        email: undefined,
        isLoggedin: false,
        isPremiumUser: false,
    };

    let [content, setContent] = useState(contentData);
    let [loginData, setLoginData] = useState(loginDetails);
    let [videoData, setVideoData] = useState("");

    useEffect(() => {
        if (loginData.id) {
            var interval = setInterval(() => {
                updateUser(loginData.id, { data: content });
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [content]);

    useEffect(() => {
        // Updating premium user in database
        setContent((prev) => ({
            ...prev,
            config: {
                ...prev.config,
                isPremiumUser: loginData.isPremiumUser,
            },
        }));
    }, [loginData.isPremiumUser]);

    return (
        <div ref={pageRef}>
            {/* <Preview content={content} setPageRef={setPageRef} /> */}
            {/* <Dashboard
        content={content}
        loginDetails={loginData}
        pageRef={pageRef}
        setContent={setContent}
        setPageRef={setPageRef}
        setLoginDetails={setLoginData}
      /> */}
            {/* <LandingPage/> */}

            <Routes>
                <Route
                    path="/payments"
                    element={
                        <>
                            {loginData.isPremiumUser ? (
                                <h1>
                                    <a href={"/dashboard/user/" + loginData.id}>
                                        You're a Premium User, Click to continue
                                    </a>
                                </h1>
                            ) : (
                                <Pricing
                                    loginDetails={loginData}
                                    setLoginDetails={setLoginData}
                                />
                            )}
                        </>
                    }
                />
                {loginData.isLoggedin ? (
                    <>
                        <Route
                            path="/login"
                            element={
                                <Dashboard
                                    content={content}
                                    loginDetails={loginData}
                                    pageRef={pageRef}
                                    setContent={setContent}
                                    setPageRef={setPageRef}
                                    setLoginDetails={setLoginData}
                                />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <Dashboard
                                    content={content}
                                    loginDetails={loginData}
                                    pageRef={pageRef}
                                    setContent={setContent}
                                    setPageRef={setPageRef}
                                    setLoginDetails={setLoginData}
                                />
                            }
                        />
                    </>
                ) : (
                    <>
                        <Route
                            path="/login"
                            element={
                                <Login
                                    setLoginData={setLoginData}
                                    loginData={loginData}
                                    setContent={setContent}
                                    setVideoData={setVideoData}
                                />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <Signup
                                    setLoginData={setLoginData}
                                    loginData={loginData}
                                    defaultData={contentData}
                                />
                            }
                        />
                    </>
                )}
                <Route
                    path="/pricing"
                    element={
                        <Pricing
                            loginDetails={loginData}
                            setLoginDetails={setLoginData}
                        />
                    }
                />
                {loginData.isLoggedin ? (
                    <>
                        <Route
                            path={"dashboard/user/:id"}
                            element={
                                <Dashboard
                                    content={content}
                                    loginDetails={loginData}
                                    pageRef={pageRef}
                                    setContent={setContent}
                                    setVideoData={setVideoData}
                                    setPageRef={setPageRef}
                                    setLoginDetails={setLoginData}
                                />
                            }
                        />
                    </>
                ) : (
                    <Route
                        path="/dashboard/user/*"
                        element={
                            <h1>
                                <a href="/login">Login to Continue</a>
                            </h1>
                        }
                    />
                )}
                <Route
                    path="/dashboard/share/:userID"
                    element={<Preview setPageRef={setPageRef} />}
                />
                <Route
                    path="/"
                    element={
                        <>
                            <LandingPage
                                loginDetails={loginData}
                                setLoginDetails={setLoginData}
                            />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
