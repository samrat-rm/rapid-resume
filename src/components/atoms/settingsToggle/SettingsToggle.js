import React, { useRef, useState } from "react";
import Pdf from "react-to-pdf";
import settingsIcon from "../../../assets/svg/settings.svg";
import shareSettings from "../../../assets/svg/save.svg";
import importJSON from "../../../assets/svg/importjson.svg";
import save from "../../../assets/svg/share.svg";
import { motion } from "framer-motion";
import "./settingsToggle.css";

const SettingsToggle = ({ pageRef, exportJson, content, setContent }) => {
  let inputRef = useRef();
  let [settingsToggle, setSettingsToggle] = useState(true);
  function togglerSettings() {
    setSettingsToggle((prev) => !prev);
  }

  function handleJsonUpload(event) {
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsText(event.target.files[0], "UTF-8");
      reader.onload = (e) => {
        //console.log(JSON.parse(e.target.result));
        e.target.result
          ? setContent(JSON.parse(e.target.result))
          : console.log("");
        //console.log(content);
      };
    }
  }

  return (
    <div
      className="fixed bottom-5 right-5 md:bottom-10 md:right-10 flex md:flex-col justify-start items-center gap-3 z-100 "
      style={{ zIndex: "5" }}
    >
      {/* upload json button below */}
      <input
        type="file"
        id="jsonupload"
        ref={inputRef}
        accept=".json,application/JSON"
        style={{ display: "none" }}
        onChange={(event) => handleJsonUpload(event)}
      />
      <button
        onClick={() => inputRef.current.click()}
        className={
          settingsToggle
            ? " icon_bg h-7 w-7 p-1 md:h-12 md:w-12 md:p-3 rounded-full "
            : "hidden"
        }
      >
        <img src={importJSON} title="Upload Json" />
      </button>
      {/* save json button */}
      <button
        onClick={() => exportJson(content)}
        className={
          settingsToggle
            ? " icon_bg h-7 w-7 p-1 md:h-12 md:w-12 md:p-3 rounded-full "
            : "hidden"
        }
      >
        <img src={shareSettings} title="Save Json" />
      </button>
      {/* print pdf button below */}
      <Pdf targetRef={pageRef} filename="rapidResume.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className={
              settingsToggle
                ? " icon_bg h-7 w-7 p-1 md:h-12 md:w-12 md:p-3 rounded-full "
                : "hidden"
            }
          >
            <img src={save} alt="save" title="Save PDF" />
          </button>
        )}
      </Pdf>

      <motion.button
        onClick={togglerSettings}
        className=" icon_bg h-9 w-9 p-1 md:h-14 md:w-14 md:p-2 rounded-full "
      >
        <img
          src={settingsIcon}
          className="w-[100%] h-[100%]"
          alt="settingsIcon"
          title="settings"
        />
      </motion.button>
    </div>
  );
};

export default SettingsToggle;
