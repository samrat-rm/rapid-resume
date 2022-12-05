import React, { useRef } from "react";
import ThemeContainer from "../../themes/themeContainer";
import Draggable from "react-draggable";
import "./page.css";

const Page = ({
  zoomValue,
  isVisible,
  content,
  isPreview = false,
  isPremiumUser,
  pageRef,
  setPageRef,
  setUserName,
  setUserEmail,
  setUserLinkedin,
  setUserPhone,
  setUserWebsite,
  setUserProfession,
  setExpCompany,
  setExpDesignation,
  setExpDuration,
  setEduDegree,
  setEduCollege,
  setEduDuration,
  setEduScore,
  setProjName,
  setProjDescription,
  setSkills,
  addProject,
  addEducation,
  addExperience,
  removeProject,
  removeEducation,
  removeExperience,
}) => {
  return (
    <div>
      {/* {//console.log(JSON.stringify(content))} */}
      <Draggable>
        <div>
          <PageWrapper
            zoomValue={zoomValue}
            isVisible={isVisible}
            isPreview={isPreview}
            isPremiumUser={isPreview ? true : isPremiumUser}
            pageRef={pageRef}
            config={content.config}
            content={content}
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
      </Draggable>
    </div>
  );
};

class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount = () => {
    this.props.setPageRef(this.props.pageRef);
  };

  render() {
    let {
      state,
      dispatch,
      zoomValue,
      config,
      isVisible,
      isPremiumUser,
      isPreview,
      pageRef,
      content,
      setUserName,
      setUserEmail,
      setUserLinkedin,
      setUserPhone,
      setUserWebsite,
      setUserProfession,
      setExpCompany,
      setExpDesignation,
      setExpDuration,
      setEduDegree,
      setEduCollege,
      setEduDuration,
      setEduScore,
      setProjName,
      setProjDescription,
      setSkills,
      addProject,
      addEducation,
      addExperience,
      removeProject,
      removeEducation,
      removeExperience,
    } = this.props;
    return (
      <div
        className="page mt-5"
        ref={pageRef}
        size="A4"
        style={{
          transform: "scale(" + zoomValue + ")",
          fontSize: config.fontSize,
          fontFamily: config.fontName,
        }}
      >
        <ThemeContainer
          state={state}
          dispatch={dispatch}
          isVisible={isVisible}
          isPremiumUser={isPremiumUser}
          headingColor={config.headingColor}
          theme={config.theme}
          isPreview={isPreview}
          content={content}
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
    );
  }
}

export default Page;
