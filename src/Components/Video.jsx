import React from "react";
import HomeVideo from "../Storage/Home.mp4";

const Video = () => {
  return (
    <div className="home-video">
      <video src={HomeVideo} autoPlay muted />
    </div>
  );
};

export default Video;
