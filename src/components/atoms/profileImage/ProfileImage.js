import React, { useState, useEffect } from "react";
import jsCookies from "js-cookies";
import default_profile from "../../../assets/default_profile.jpg";
import overlay from "../../../assets/Background.png";
import "./profileImage.css";

const ProfileImage = (
  setImage,
  image,
  isProfileRound = true,
  headingColor = "transparent",
  hasBorder = false
) => {
  let [imageData, setImageData] = useState(
    jsCookies.getItem("image") ? jsCookies.getItem("image") : default_profile
  );
  function handleProfilePic(event) {
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        //console.log(reader.result);
        reader.result
          ? jsCookies.setItem("image", reader.result)
          : jsCookies.removeItem("image");
        // setImage(jsCookies.getItem("image"));
        // imageData = jsCookies.getItem("image");
        setImageData(reader.result);
      };
    }
  }
  return (
    <>
      <label htmlFor="imgupload" className="p-0 m-0">
        {isProfileRound && (
          <>
            <img
              src={imageData}
              htmlFor="imgupload"
              className="isround m-3 mt-0"
              style={{
                border: hasBorder
                  ? "5px solid green "
                  : "0px transparent solid",
              }}
            />
          </>
        )}
        {!isProfileRound && (
          <>
            <img
              src={imageData}
              htmlFor="imgupload"
              className="square m-3 mt-0 rounded"
            />
          </>
        )}
      </label>
      <input
        type="file"
        id="imgupload"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(event) => handleProfilePic(event)}
      />
    </>
  );
};

export default ProfileImage;
