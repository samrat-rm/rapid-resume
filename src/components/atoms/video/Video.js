// import { useToast } from "@chakra-ui/react";
import Axios from "axios";
import { useEffect, useState } from "react";
import {
  updateUser,
  findUser,
} from "../../../globals/config/firebaseStorage/userData";
const Video = ({ setVideoData, id }) => {
  // const toast = useToast();

  // const success = () => {
  //   return toast({
  //     status: "success",
  //     variant: "left-accent",
  //     title: "Success",
  //     description: "Video uploaded Successfuly",
  //     isClosable: true,
  //   });
  // };

  // const sizeExceed = () => {
  //   return toast({
  //     status: "warning",
  //     variant: "left-accent",
  //     title: "File size exceeds limit",
  //     description: "Video should be less than 5MB.",
  //     isClosable: true,
  //   });
  // };

  // const checkNetwork = () => {
  //   return toast({
  //     status: "error",
  //     variant: "left-accent",
  //     title: "Unable to upload media",
  //     description: "Please check your netwrok connection.",
  //     isClosable: true,
  //   });
  // };
  const fetchVideoURL = async () => {
    let user = await findUser(id);
    // //console.log(">>>>>>>>", user.videoURL);
    setVideoURL(user.videoURL);
  };
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState("#");
  const [isFalse, setFalse] = useState(false);
  useEffect(() => {
    if (!isFalse) {
      fetchVideoURL();
      setFalse(true);
    }
  }, []);

  function uploadVideo(event) {
    setVideoFile(event.target.files[0]);
    // //console.log(videoFile);
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
    )
      .then((res) => {
        // //console.log("video log ere", res);
        setVideoURL(res.data.secure_url);
        setVideoData(res.data.secure_url);
        updateUser(id, { videoURL: res.data.secure_url });
        // //console.log(videoURL);
        return;
      })
      .catch((e) => {
        //console.log(e);
      });
    setVideoFile(null);
  }
  let hasVideo = true;
  return (
    <>
      {videoURL && (
        <div>
          <h1>Your Video</h1>
          <a href={videoURL} target="_blank">
            {videoURL}
          </a>
        </div>
      )}
      {!hasVideo && <h1>Has No video</h1>}
      <input
        type="file"
        className="form-control-sm pt-4 pb-2"
        id="inputFile1"
        onChange={(e) => uploadVideo(e)}
      />
      <button className="btn btn-sm btn-primary" onClick={(e) => submitVideo()}>
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default Video;
