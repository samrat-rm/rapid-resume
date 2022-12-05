import { useState } from "react";
import InlineEdit from "../inlineEdit/InlineEdit";
import { FiX } from "react-icons/fi";
const Project = ({
  isPreview = false,
  content,
  addProject,
  removeProject,
  setProjName,
  setProjDescription,
}) => {
  let [ishideRow, setHideRow] = useState(true);
  let [rowNum, setRowNum] = useState(-1);
  return (
    <>
      <div className={"d-flex flex-column col px-3 "}>
        {content &&
          content.map((data, index) => {
            return (
              <div
                className={"d-flex pb-1  justify-content-between"}
                onMouseEnter={() => {
                  setHideRow(false);
                  setRowNum(index);
                }}
                onMouseLeave={() => {
                  setHideRow(true);
                  setRowNum(-1);
                }}
                key={index}
              >
                <div className="col p-1 bg-white">
                  <div className="d-flex">
                    {!ishideRow && rowNum === index && (
                      <FiX
                        className="mx-2"
                        onClick={(e) => removeProject(index)}
                      />
                    )}
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.name}
                      setValue={setProjName}
                      index={index}
                      className="fw-bolder"
                    />
                  </div>

                  <div>
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.description}
                      setValue={setProjDescription}
                      index={index}
                      className="fst-italic"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Project;
