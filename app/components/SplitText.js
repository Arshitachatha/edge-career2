import React from "react";

export default function SplitText({ text }) {
  // Splits the text into letters and wraps each in a span
  return (
    <span>
      {text.split("").map((char, idx) => (
        <span key={idx} style={{ display: "inline-block", transition: "color 0.3s", color: "#FFD700" }}>
          {char}
        </span>
      ))}
    </span>
  );
}