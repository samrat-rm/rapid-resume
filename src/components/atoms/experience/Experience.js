import { useState } from "react";
import InlineEdit from "../inlineEdit/InlineEdit";
import { FiX } from "react-icons/fi";
const Experience = ({
  isPreview = false,
  content,
  addExperience,
  removeExperience,
  setExpCompany,
  setExpDesignation,
  setExpDuration,
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
                <div className="col p-1 bg-white">
                  <div className="d-flex">
                    {!ishideRow && rowNum === index && (
                      <FiX
                        className="mx-2"
                        onClick={(e) => removeExperience(index)}
                      />
                    )}
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.company}
                      setValue={setExpCompany}
                      index={index}
                      className="fw-bolder"
                    />
                  </div>

                  <div>
                    <InlineEdit
                      isPreview={isPreview}
                      value={data.designation}
                      setValue={setExpDesignation}
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
                      setValue={setExpDuration}
                      index={index}
                      maxLength={15}
                      align={"right"}
                      className={"text-align-right"}
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

export default Experience;
