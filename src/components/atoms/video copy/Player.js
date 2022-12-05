import React, { useState } from "react";

const Player = (props) => {
    let [videoSrc, setVideoSrc] = useState(props.src);
    return (
        <video className="max-h-52 max-w-52" controls width="100%">
            <source src={videoSrc} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
    );
};

export default Player;
