import { useState } from "react";
import InlineEdit from "../inlineEdit/InlineEdit";
import { FiX } from "react-icons/fi";
const Education = ({
  isPreview = false,
  content,
  addEducation,
  removeEducation,
  setEduDegree,
  setEduCollege,
  setEduDuration,
  setEduScore,
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
                className={"d-flex pb-1 justify-content-between"}
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
                <div className="col p-1">
                  <div className="d-flex">
                    {!ishideRow && rowNum === index && (
                      <FiX
                        className="mx-2"
                        onClick={(e) => removeEducation(index)}
                      />
                    )}
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.degree}
                      setValue={setEduDegree}
                      index={index}
                      className="fw-bolder"
                    />
                  </div>

                  <div>
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.college}
                      setValue={setEduCollege}
                      index={index}
                      className="fst-italic"
                    />
                  </div>
                </div>
                <div className="col p-1 text-align-right">
                  <div>
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.duration}
                      setValue={setEduDuration}
                      index={index}
                      maxLength={15}
                      align={"right"}
                      className={"text-align-right"}
                    />
                  </div>
                  <div>
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.score}
                      setValue={setEduScore}
                      index={index}
                      className="fst-italic text-align-right"
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

export default Education;
