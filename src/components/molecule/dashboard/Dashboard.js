import Page from "../../atoms/page/Page";
import SettingsToggle from "../../atoms/settingsToggle/SettingsToggle";
import Magnifier from "../../atoms/magnifier/Magnifier";

import Background from "../../atoms/background/Background";
import Header from "../../atoms/header/Header";
import Sidebar from "../../atoms/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { findUser } from "../../../globals/config/firebaseStorage/userData";
import { useParams } from "react-router-dom";

const Dashboard = ({
    content,
    setContent,
    setVideoData,
    loginDetails,
    setLoginDetails,
    pageRef,
    setPageRef,
}) => {
    let temp = undefined;
    const [sliderValue, setSliderValue] = useState(1);
    const [user, setUser] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        findUser(id).then(async (resDB) => {
            await setUser(resDB);
            // //console.log("inner >>>>", user);
        });
        // //console.log("outer >>>", user);
    }, [id]);

    const setUserName = (i, userName) => {
        setContent((prev) => ({
            ...prev,
            userinfo: {
                ...prev.userinfo,
                name: userName,
            },
        }));
    };

    const setUserProfession = (i, userProfession) => {
        setContent((prev) => ({
            ...prev,
            userinfo: {
                ...prev.userinfo,
                profession: userProfession,
            },
        }));
    };

    const setUserEmail = (i, email) => {
        setContent((prev) => ({
            ...prev,
            userinfo: {
                ...prev.userinfo,
                email: email,
            },
        }));
    };

    const setUserPhone = (i, phone) => {
        setContent((prev) => ({
            ...prev,
            userinfo: {
                ...prev.userinfo,
                phone: phone,
            },
        }));
    };

    const setUserLinkedin = (i, linkedin) => {
        setContent((prev) => ({
            ...prev,
            userinfo: {
                ...prev.userinfo,
                linkedin: linkedin,
            },
        }));
    };

    const setUserWebsite = (i, website) => {
        setContent((prev) => ({
            ...prev,
            userinfo: {
                ...prev.userinfo,
                website: website,
            },
        }));
    };

    const addExperience = () => {
        setContent((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    company: "New Company",
                    designation: "New Designation",
                    duration: "Nov 20-Present",
                },
            ],
        }));
    };

    const removeExperience = (i) => {
        setContent((prev) => ({
            ...prev,
            experience: prev.experience.filter((exp, index) => index !== i),
        }));
    };

    const setExpCompany = (i, company) => {
        temp = content;
        temp.experience[i].company = company;
        setContent((prev) => temp);
        temp = undefined;
    };

    const setExpDesignation = (i, designation) => {
        temp = content;
        temp.experience[i].designation = designation;
        setContent((prev) => temp);
        temp = undefined;
    };

    const setExpDuration = (i, duration) => {
        temp = content;
        temp.experience[i].duration = duration;
        setContent((prev) => temp);
        temp = undefined;
    };

    const addEducation = () => {
        setContent((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    degree: "Your Degree",
                    college: "Your College",
                    duration: "Sep 18 - Aug 21",
                    score: "CGPA or %",
                },
            ],
        }));
    };

    const removeEducation = (i) => {
        setContent((prev) => ({
            ...prev,
            education: prev.education.filter((exp, index) => index !== i),
        }));
    };

    const setEduDegree = (i, degree) => {
        temp = content;
        temp.education[i].degree = degree;
        setContent((prev) => temp);
        temp = undefined;
    };

    const setEduCollege = (i, college) => {
        temp = content;
        temp.education[i].college = college;
        setContent((prev) => temp);
        temp = undefined;
    };

    const setEduDuration = (i, duration) => {
        temp = content;
        temp.education[i].duration = duration;
        setContent((prev) => temp);
        temp = undefined;
    };

    const setEduScore = (i, score) => {
        temp = content;
        temp.education[i].score = score;
        setContent((prev) => temp);
        temp = undefined;
    };

    const addProject = () => {
        setContent((prev) => ({
            ...prev,
            projects: [
                ...prev.projects,
                {
                    name: "Your Project",
                    description: "Your Project description goes here....",
                },
            ],
        }));
    };

    const removeProject = (i) => {
        temp = content;
        temp.projects = temp.projects.filter((project, index) => index !== i);
        setContent(temp);
        temp = undefined;
    };

    const setProjName = (i, name) => {
        temp = content;
        temp.projects[i].name = name;
        setContent((prev) => temp);
        temp = undefined;
    };

    const setProjDescription = (i, description) => {
        temp = content;
        temp.projects[i].description = description;
        setContent((prev) => temp);
        temp = undefined;
    };

    const setSkills = (i, skills) => {
        temp = content;
        temp.skills.csv = skills;
        setContent(temp);
        temp = undefined;
    };

    const setFontSize = (fontSize) => {
        setContent((prev) => ({
            ...prev,
            config: {
                ...prev.config,
                fontSize: fontSize,
            },
        }));
    };

    const setFontName = (fontName) => {
        setContent((prev) => ({
            ...prev,
            config: {
                ...prev.config,
                fontName: fontName,
            },
        }));
    };

    const setHeadingColor = (headingColor) => {
        setContent((prev) => ({
            ...prev,
            config: {
                ...prev.config,
                headingColor: headingColor,
            },
        }));
    };

    const setTheme = (theme) => {
        setContent((prev) => ({
            ...prev,
            config: {
                ...prev.config,
                theme: theme,
            },
        }));
    };

    const setVisible = (isVisible) => {
        //console.log(JSON.stringify(isVisible));
        setContent((prev) => ({
            ...prev,
            isVisible: isVisible,
        }));
    };

    const exportJson = () => {
        // create file in browser
        const fileName = "userData";
        const json = JSON.stringify(content, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);

        // create "a" HTLM element with href to file
        const link = document.createElement("a");
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    };

    return (
        <>
            {loginDetails.isLoggedin ? (
                <>
                    <Background isCircle isgradient />
                    <Header
                        loginDetails={loginDetails}
                        setLoginDetails={setLoginDetails}
                        dashboardLink={true}
                    />
                    <Sidebar
                        setFontSize={setFontSize}
                        setFontName={setFontName}
                        setHeadingColor={setHeadingColor}
                        setVideoData={setVideoData}
                        isVisible={content.isVisible}
                        setVisible={setVisible}
                        setTheme={setTheme}
                        isPremiumUser={loginDetails.isPremiumUser}
                        id={loginDetails.id}
                    />
                    <Magnifier
                        sliderValue={sliderValue}
                        setSliderValue={setSliderValue}
                    />
                    <SettingsToggle
                        pageRef={pageRef}
                        content={content}
                        setContent={setContent}
                        exportJson={exportJson}
                    />
                    <div>
                        <Page
                            zoomValue={sliderValue}
                            isPremiumUser={loginDetails.isPremiumUser}
                            isVisible={content.isVisible}
                            content={content}
                            pageRef={pageRef}
                            setPageRef={setPageRef}
                            setUserName={setUserName}
                            setUserEmail={setUserEmail}
                            setUserLinkedin={setUserLinkedin}
                            setUserPhone={setUserPhone}
                            setUserWebsite={setUserWebsite}
                            setUserProfession={setUserProfession}
                            setExpCompany={setExpCompany}
                            setExpDesignation={setExpDesignation}
                            setExpDuration={setExpDuration}
                            setEduDegree={setEduDegree}
                            setEduCollege={setEduCollege}
                            setEduDuration={setEduDuration}
                            setEduScore={setEduScore}
                            setProjName={setProjName}
                            setProjDescription={setProjDescription}
                            setSkills={setSkills}
                            addProject={addProject}
                            addEducation={addEducation}
                            addExperience={addExperience}
                            removeProject={removeProject}
                            removeEducation={removeEducation}
                            removeExperience={removeExperience}
                        />
                    </div>
                </>
            ) : (
                <>The userData is not defined or invalid</>
            )}
        </>
    );
};

export default Dashboard;
