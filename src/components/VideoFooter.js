import React from "react";
import "./videofooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videofooter">
      <div className="videofooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videofooter__ticker">
          <MusicNoteIcon className="videofooter__icon" />
          <Ticker mode="smooth">
            {() => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        className="videofooter__record"
      />
    </div>
  );
}

export default VideoFooter;
