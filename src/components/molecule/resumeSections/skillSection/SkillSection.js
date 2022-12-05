import SkillTag from "../../../atoms/skillTag/SkillTag";

const SkillSection = ({
  headingColor = "black",
  isPreview,
  setSkills,
  content,
}) => {
  return (
    <div className="col">
      <h3 className="px-3 fw-bolder pt-3" style={{ color: headingColor }}>
        Skills
        <hr className="border border-1 border-dark"></hr>
      </h3>
      <SkillTag
        headingColor={headingColor}
        isPreview={isPreview}
        content={content}
        setSkills={setSkills}
      />
    </div>
  );
};

export default SkillSection;
