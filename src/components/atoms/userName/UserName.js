import React, { useState } from "react";
import Contact from "../contact/Contact";
import InlineEdit from "../inlineEdit/InlineEdit";
import ProfileImage from "../profileImage/ProfileImage";
import default_profile from "../../../assets/default_profile.jpg";
import "./userName.css";

const UserName = ({
  align = "center",
  isProfessionVisible = false,
  includeContacts = false,
  alignContacts = "center",
  hasProfilePic = false,
  isProfileRound = false,
  image = default_profile,
  headingColor = "#000",
  hasBorder = false,
  isPreview = false,
  content,
}) => {
  let [imageData, setImageData] = useState(image);

  return (
    <div className="d-flex flex-row">
      {/* {//console.log(content.contact)} */}
      {/* {//console.log("isPreview username : " + isPreview)} */}
      {hasProfilePic && (
        <ProfileImage
          setImage={setImageData}
          image={imageData}
          isProfileRound={isProfileRound}
          hasBorder={true}
          headingColor={"green"}
        />
      )}

      <div
        className={
          !includeContacts && isProfessionVisible
            ? "d-flex flex-column col px-3 align-self-center align-items-" +
              align
            : "d-flex flex-column col px-3 align-items-" + align
        }
      >
        {/* <div className={"username-" + align + " h2"}>Jon Doe</div>
      {isProfessionVisible && <div className="h4 p-0 m-0">Profession</div>} */}
        <div className={"align-items-" + align + " block p-0 m-0"}>
          <InlineEdit
            isPreview={isPreview}
            value={content.name}
            className={"text-align-" + align + " fs-3 text-uppercase"}
            style={{ color: headingColor }}
          />
        </div>
        {!includeContacts && isProfessionVisible && (
          <div className="p-0 m-0">
            <InlineEdit
              isPreview={isPreview}
              value={content.profession}
              className={"text-align-" + align}
            />
          </div>
        )}
        {includeContacts && !isProfessionVisible && (
          <div className="p-0 m-0 ">
            <Contact
              isPreview={isPreview}
              align={alignContacts}
              headingColor={headingColor}
              content={content.contact}
            />
          </div>
        )}
        {includeContacts && isProfessionVisible && (
          <div className="p-0 m-0">
            <InlineEdit
              isPreview={isPreview}
              value={content.profession}
              className={"text-align-" + align}
            />

            <Contact
              isPreview={isPreview}
              align={alignContacts}
              headingColor={headingColor}
              content={content.contact}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserName;
