import React from "react";
import * as FreeThemes from "./themeExportsFree.js";
import * as AllThemes from "./themeExportsAll.js";

function renderSelectedTheme(props) {
  let Themes = props.isPremiumUser ? AllThemes : FreeThemes;
  let SelectedTheme = Themes[props.theme];
  return (
    <SelectedTheme
      state={props.state}
      dispatch={props.dispatch}
      headingColor={props.headingColor}
      isVisible={props.isVisible}
      isPreview={props.isPreview}
      content={props.content}
      setUserName={props.setUserName}
      setUserEmail={props.setUserEmail}
      setUserLinkedin={props.setUserLinkedin}
      setUserPhone={props.setUserPhone}
      setUserWebsite={props.setUserWebsite}
      setUserProfession={props.setUserProfession}
      setExpCompany={props.setExpCompany}
      setExpDesignation={props.setExpDesignation}
      setExpDuration={props.setExpDuration}
      setEduDegree={props.setEduDegree}
      setEduCollege={props.setEduCollege}
      setEduDuration={props.setEduDuration}
      setEduScore={props.setEduScore}
      setProjName={props.setProjName}
      setProjDescription={props.setProjDescription}
      setSkills={props.setSkills}
      addProject={props.addProject}
      addEducation={props.addEducation}
      addExperience={props.addExperience}
      removeProject={props.removeProject}
      removeEducation={props.removeEducation}
      removeExperience={props.removeExperience}
    />
  );
}

const ThemeContainer = ({
  platform,
  state,
  dispatch,
  headingColor,
  isVisible,
  isPremiumUser,
  theme,
  isPreview,
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
}) => {
  return (
    <div className="layout-container">
      {renderSelectedTheme({
        platform,
        state,
        dispatch,
        headingColor,
        isVisible,
        isPremiumUser,
        theme,
        isPreview,
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
      })}
    </div>
  );
};

export default ThemeContainer;
