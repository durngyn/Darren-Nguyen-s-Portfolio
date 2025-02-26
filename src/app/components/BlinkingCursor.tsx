"use client";
import { useEffect, useState } from "react";

const BlinkingCursor: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); 

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span style={{ fontWeight: "bold", visibility: showCursor ? "visible" : "hidden" }}>
      |
    </span>
  );
};

export default BlinkingCursor;