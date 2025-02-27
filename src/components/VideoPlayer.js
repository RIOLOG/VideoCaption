import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl, captions }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  
  const currentCaptions = captions.filter(
    (cap) => currentTime >= cap.start && currentTime <= cap.end
  );

  return (
    <div className="relative">
      <ReactPlayer
        ref={(player) => (playerRef.current = player)}
        url={videoUrl}
        controls
        width="100%"
        height="auto"
      />

      {currentCaptions.length > 0 && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md text-lg text-center">
          {currentCaptions.map((cap, index) => (
            <div key={index}>{cap.text}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
