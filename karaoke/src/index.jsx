import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Lyrics } from "./components/Lyrics";
import { Player } from "./components/Player";
import "./style.css";
import lyrics from "./lyrics-lines";

const App = () => {
  const [currentLine, setCurrentLine] = useState(-1);

  const handleTimeUpdate = (time) => {
    const lessTime = lyrics.filter((line) => line.time < time);
    if (currentLine !== lessTime.length - 1) {
      setCurrentLine(lessTime.length - 1);
    }
  };
  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player
        src="fools-garden-lemon-tree.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <Lyrics lines={lyrics} currentLineIndex={currentLine} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
