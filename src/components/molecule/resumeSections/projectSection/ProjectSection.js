import Project from "../../../atoms/project/Project";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
const ProjectSection = ({
  headingColor = "black",
  isPreview,
  content,
  addProject,
  removeProject,
  setProjName,
  setProjDescription,
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
        Projects
        {!ishide && <FiPlus className="mx-2" onClick={(e) => addProject()} />}
      </h3>
      <hr className="border border-1 border-dark mx-3"></hr>
      <Project
        headingColor={headingColor}
        isPreview={isPreview}
        content={content}
        addProject={addProject}
        removeProject={removeProject}
        setProjName={setProjName}
        setProjDescription={setProjDescription}
      />
    </div>
  );
};

export default ProjectSection;
