import Experience from "../../../atoms/experience/Experience";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
const ExperienceSection = ({
  headingColor = "black",
  isPreview,
  content,
  setExpCompany,
  setExpDesignation,
  setExpDuration,
  addExperience,
  removeExperience,
}) => {
  let [ishide, setHide] = useState(true);
  return (
    <div
      className="col"
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
    >
      <h3
        className="px-3  fw-bolder pt-3 d-flex"
        style={{ color: headingColor }}
      >
        Experience
        {!ishide && (
          <FiPlus className="mx-2" onClick={(e) => addExperience()} />
        )}
      </h3>
      <hr className="border border-1 border-dark mx-3"></hr>
      <Experience
        headingColor={headingColor}
        isPreview={isPreview}
        content={content}
        addExperience={addExperience}
        removeExperience={removeExperience}
        setExpCompany={setExpCompany}
        setExpDesignation={setExpDesignation}
        setExpDuration={setExpDuration}
      />
    </div>
  );
};

export default ExperienceSection;
