import React, { useEffect, useRef } from "react";

export const Lyrics = ({ lines, currentLineIndex }) => {
  const lineRef = useRef();

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [currentLineIndex]);

  return (
    <div className="lyrics">
      {lines.map((line, index) => (
        <p
          ref={index === currentLineIndex ? lineRef : undefined}
          key={index}
          className={index === currentLineIndex ? "current-line" : undefined}
        >
          {line.text}
        </p>
      ))}
    </div>
  );
};
