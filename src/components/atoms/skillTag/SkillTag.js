import InlineEdit from "../inlineEdit/InlineEdit";

const SkillTag = ({ isPreview = false, setSkills, content }) => {

  return (
    <div className={"d-flex flex-column col px-3 "}>
      <InlineEdit
        isPreview={isPreview}
        value={content.csv}
        setValue={setSkills}
      />
    </div>
  );
};

export default SkillTag;
