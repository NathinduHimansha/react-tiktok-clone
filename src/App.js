import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/Video";
import db from "./firebase/firebase";

function App() {
  const [videos, setVideos] = useState([]);

  //snapshot means its captures all the data at the time and then we can access it
  useEffect(() => {
    console.log("effected");
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);
  console.log("vi", videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos?.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
