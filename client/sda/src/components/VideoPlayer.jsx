import React from "react";
import "../css-assets/VideoPlayer.css"; // Import CSS file for styling

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-container">
      <video controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
