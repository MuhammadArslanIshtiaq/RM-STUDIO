import React from "react";

const VideoCard = ({ src, poster }) => {
  return (
    <>
      <div className="d-flex">
        <video
          className=""
          id="myVideo"
          loop="loop"
          muted="muted"
          playsInline=""
          data-autoplay=""
          poster={poster}
          src={src}
        ></video>
      </div>
    </>
  );
};

export default VideoCard;
