import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import CaptionForm from "./CaptionForm";

const Merge = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (newCaption) => {
    setCaptions([...captions, newCaption]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Video Caption Editor</h1>

      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="border rounded px-4 py-2 w-full"
      />

  
      {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}

 
      <CaptionForm onAddCaption={handleAddCaption} />

      <div>
        <h2 className="text-xl font-semibold">Captions</h2>
        <ul className="space-y-2">
          {captions.map((cap, index) => (
            <li key={index} className="border rounded p-2">
              {cap.text} ({cap.start}s - {cap.end}s)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Merge;
