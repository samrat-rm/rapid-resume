import Education from "../../../atoms/education/Education";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
const EducationSection = ({
  headingColor = "black",
  content,
  isPreview,
  addEducation,
  removeEducation,
  setEduDegree,
  setEduCollege,
  setEduDuration,
  setEduScore,
}) => {
  let [ishide, setHide] = useState(true);
  return (
    <>
      <div
        className="col"
        onMouseEnter={() => setHide(false)}
        onMouseLeave={() => setHide(true)}
      >
        <h3
          className="px-3 fw-bolder pt-3 d-flex "
          style={{ color: headingColor }}
        >
          Education{" "}
          {!ishide && (
            <FiPlus className="mx-2" onClick={(e) => addEducation()} />
          )}
        </h3>
        <hr className="border border-1 border-dark mx-3"></hr>
        <Education
          headingColor={headingColor}
          isPreview={isPreview}
          content={content}
          addEducation={addEducation}
          removeEducation={removeEducation}
          setEduDegree={setEduDegree}
          setEduCollege={setEduCollege}
          setEduDuration={setEduDuration}
          setEduScore={setEduScore}
        />
      </div>
    </>
  );
};

export default EducationSection;
