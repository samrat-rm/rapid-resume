import React from "react";
import LoginComponent from "../../atoms/loginComponent/LoginComponent";
import Header from "../../atoms/header/Header";
import Footer from "../../atoms/footer/Footer";
// import Blur from "../../atoms/background/Blur";
import Background from "../../atoms/background/Background";

const Login = ({ setLoginData, loginData, setContent, setVideoData }) => {
    return (
        <>
            <Background isCircle isgradient />
            <Header loginDetails={loginData} setLoginDetails={setLoginData} />
            <div className="container">
                <LoginComponent
                    setLoginDataProps={setLoginData}
                    setContent={setContent}
                    setVideoData={setVideoData}
                />
            </div>
            <Footer />
        </>
    );
};

export default Login;
