import React, { useEffect, useRef, useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";
import Axios from "axios";
import Player from "./Player";

const Video = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [videoURL, setVideoURL] = useState("");

  // const cld = new Cloudinary({
  //     cloud: {
  //         cloudName: "rapid-resume",
  //     },
  // });

  function uploadVideo(event) {
    setVideoFile(event.target.files[0]);
  }
  function submitVideo() {
    if (!videoFile) {
      alert("Select a file before uploading");
      return;
    }
    let formData = new FormData();
    formData.append("file", videoFile);
    formData.append("upload_preset", "rsoky1sw");
    Axios.post(
      "https://api.cloudinary.com/v1_1/rapid-resume/video/upload",
      formData
    ).then((res) => {
      //console.log(res);
      setVideoURL(res.data.secure_url);
      //console.log("url", videoURL);
      return;
    });
    // .catch((err) => //console.log(err));
    setVideoFile(null);
    setUploadStatus(true);
    setTimeout(() => {
      setUploadStatus(false);
    }, 2000);
  }
  return (
    <>
      {uploadStatus ? (
        <div className="fixed h-24 w-96 bg-white top-5 right-5  p-4 rounded-full ">
          <p className="text-lg text-green">Upload Successful</p>
        </div>
      ) : (
        <div className="fixed flex flex-col justify-center gap-3 items-center h-52 w-96 bg-slate-200 top-5 right-5  p-4 rounded-full ">
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={uploadVideo}
          />
          <button
            className="border-2 p-2 text-white rounded-lg bg-gray"
            onClick={submitVideo}
          >
            {"Upload "}
          </button>
        </div>
      )}
      {videoURL.length > 0 && <Player src={videoURL} />}
    </>
  );
};

export default Video;
