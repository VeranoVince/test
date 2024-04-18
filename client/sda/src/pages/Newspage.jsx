import React from "react";
import News from "../components/News";
import VideoPlayer from "../components/VideoPlayer";
import NewsBanner from "../components/NewsBanner";
import "../css-assets/Newspage.css";

function Newspage() {
  return (
    <div>
      <NewsBanner />
      <News />

      <h1 className="VideoSdaText" style={{ textAlign: "center" }}>
        2021 STO.DOMINGO APPRECIATION
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <VideoPlayer src="/SdaVideo.mp4" width={1040} height={760} />
      </div>
    </div>
  );
}

export default Newspage;
