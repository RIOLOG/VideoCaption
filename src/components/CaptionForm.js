import React, { useState } from "react";

const CaptionForm = ({ onAddCaption }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !start || !end) return;

    onAddCaption({ text, start: parseFloat(start), end: parseFloat(end) });

    setText("");
    setStart("");
    setEnd("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Enter caption"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded px-4 py-2 w-full"
      />
      <div className="flex space-x-2">
        <input
          type="number"
          placeholder="Start time (sec)"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="number"
          placeholder="End time (sec)"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Caption
      </button>
    </form>
  );
};

export default CaptionForm;