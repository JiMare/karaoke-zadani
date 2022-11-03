import React, { useEffect, useRef, useState } from "react";

export const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio
        src={src}
        ref={audioRef}
        onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)}
      />
      <div className="player-controls">
        <button
          onClick={togglePlaying}
          className={playing ? "play-button pause" : "play-button play"}
        ></button>
      </div>
    </>
  );
};
