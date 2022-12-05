import React from "react";
import IntroductionSection from "./introductionSection/IntroductionSection";
import HowItWorks from "./howItWorks/HowItWorks";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Pricing from "./pricing/Pricing";
import TryForFree from "./tryForFree/TryForFree";
import Footer from "../../atoms/footer/Footer";

const LandingPage = (props) => {
  return (
    <div className="overflow-hidden">
      <IntroductionSection
        loginDetails={props.loginDetails}
        setLoginDetails={props.setLoginDetails}
      />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <TryForFree />
      <Footer />
    </div>
  );
};

export default LandingPage;
