import React from "react";
import Introduction from "../introduction/Introduction";
import Header from "../../../atoms/header/Header";

function IntroductionSection({
  loginDetails,
  setLoginDetails ,
}) {
  return (
    <div className="w-screen h-auto md:h-auto bg-gradient-to-r z-0 relative from-bgPurple to-bgPink rounded-b-[10rem] overflow-x-hidden box-border pb-20 ">
      <Header loginDetails={loginDetails} setLoginDetails={setLoginDetails} />
      <Introduction />
    </div>
  );
}

export default IntroductionSection;
