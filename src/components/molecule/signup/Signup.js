import React from "react";
import SignupComponent from "../../atoms/signupComponent/SignupComponent";
import Header from "../../atoms/header/Header";
import Footer from "../../atoms/footer/Footer";
import Blur from "../../atoms/background/Blur";

const Signup = ({ setLoginData, loginData,defaultData }) => {
  return (
    <>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
      <Header loginDetails={loginData} setLoginDetails={setLoginData} />
      <div className="container">
        <SignupComponent setLoginData={setLoginData} defaultData={defaultData }/>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
