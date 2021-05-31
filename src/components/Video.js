import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  // ref gives the reference to the object by providing current state
  const videoRef = useRef(null);

  // chnage the play pause state uisng ref
  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        //   useref
        ref={videoRef}
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
