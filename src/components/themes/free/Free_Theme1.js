import UserInfoSection from "../../molecule/resumeSections/userInfoSection/UserInfoSection";
import EducationSection from "../../molecule/resumeSections/educationSection/EducationSection";
import ExperienceSection from "../../molecule/resumeSections/experienceSection/ExperienceSection";
import ProjectSection from "../../molecule/resumeSections/projectSection/ProjectSection";
import SkillSection from "../../molecule/resumeSections/skillSection/SkillSection";

const Free_Theme1 = ({
  state,
  platform,
  dispatch,
  headingColor = "black",
  isVisible,
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
  if (platform === "pdf") {
    return (
      <>
        <UserInfoSection platform="pdf" state={state} />
      </>
    );
  }

  return (
    <>
      {/* {//console.log("isPreview : " + isPreview)} */}

      {isVisible.userinfo && (
        <UserInfoSection
          state={state}
          dispatch={dispatch}
          includeContacts={false}
          hasProfilePic
          isProfileRound
          isProfessionVisible
          headingColor={headingColor}
          isPreview={isPreview}
          content={content.userinfo}
          setUserName={setUserName}
          setUserEmail={setUserEmail}
          setUserLinkedin={setUserLinkedin}
          setUserPhone={setUserPhone}
          setUserWebsite={setUserWebsite}
          setUserProfession={setUserProfession}
        />
      )}
      <div className="d-flex flex-column">
        {isVisible.experience && (
          <ExperienceSection
            headingColor={headingColor}
            isPreview={isPreview}
            content={content.experience}
            addExperience={addExperience}
            removeExperience={removeExperience}
            setExpCompany={setExpCompany}
            setExpDesignation={setExpDesignation}
            setExpDuration={setExpDuration}
          />
        )}

        {isVisible.education && (
          <EducationSection
            headingColor={headingColor}
            isPreview={isPreview}
            content={content.education}
            addEducation={addEducation}
            removeEducation={removeEducation}
            setEduDegree={setEduDegree}
            setEduCollege={setEduCollege}
            setEduDuration={setEduDuration}
            setEduScore={setEduScore}
          />
        )}

        {isVisible.projects && (
          <ProjectSection
            headingColor={headingColor}
            isPreview={isPreview}
            content={content.projects}
            addProject={addProject}
            removeProject={removeProject}
            setProjName={setProjName}
            setProjDescription={setProjDescription}
          />
        )}

        {isVisible.skills && (
          <SkillSection
            headingColor={headingColor}
            isPreview={isPreview}
            setSkills={setSkills}
            content={content.skills}
          />
        )}
      </div>
    </>
  );
};

export default Free_Theme1;
