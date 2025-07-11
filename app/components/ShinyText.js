// filepath: c:\Users\Dell\OneDrive\Documents\Edge career\components\ui\blocks\ShinyText\ShinyText.js
import React from "react";

export default function ShinyText({ children }) {
  return (
    <span style={{ color: "gold", fontWeight: "bold", textShadow: "0 0 8px #FFD700" }}>
      {children}
    </span>
  );
}