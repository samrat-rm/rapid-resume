import UserInfoSection from "../../molecule/resumeSections/userInfoSection/UserInfoSection";
import EducationSection from "../../molecule/resumeSections/educationSection/EducationSection";
import ExperienceSection from "../../molecule/resumeSections/experienceSection/ExperienceSection";
import ProjectSection from "../../molecule/resumeSections/projectSection/ProjectSection";
import SkillSection from "../../molecule/resumeSections/skillSection/SkillSection";
import ContactSection from "../../molecule/resumeSections/contactSection/ContactSection";

const Paid_Theme1 = ({
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
    <div className="overflow-visible">
      {isVisible.userinfo && (
        <UserInfoSection
          state={state}
          dispatch={dispatch}
          includeContacts={false}
          hasProfilePic={true}
          isProfileRound={true}
          isProfessionVisible
          headingColor={headingColor}
          alignContacts={"center"}
          align={"left"}
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

      <div className="d-flex">
        <div className="d-flex col-3 flex-column">
          {isVisible.contact && (
            <div className="flex-grow-1 h-100">
              <ContactSection
                headingColor={headingColor}
                isPreview={isPreview}
                align="left"
                content={content.userinfo.contact}
                padding
              />
            </div>
          )}
        </div>
        <div className="d-flex col-9 flex-column">
          {isVisible.skills && (
            <SkillSection
              headingColor={headingColor}
              isPreview={isPreview}
              setSkills={setSkills}
              content={content.skills}
            />
          )}
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
        </div>
      </div>
      {/* <ExperienceSection
        headingColor={headingColor}
        isPreview={isPreview}
        content={content.experience}
        addExperience={addExperience}
        removeExperience={removeExperience}
        setExpCompany={setExpCompany}
        setExpDesignation={setExpDesignation}
        setExpDuration={setExpDuration}
      />

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

      <ProjectSection
        headingColor={headingColor}
        isPreview={isPreview}
        content={content.projects}
        addProject={addProject}
        removeProject={removeProject}
        setProjName={setProjName}
        setProjDescription={setProjDescription}
      />

      <SkillSection
        headingColor={headingColor}
        isPreview={isPreview}
        setSkills={setSkills}
        content={content.skills}
      /> */}
    </div>
  );
};

export default Paid_Theme1;
