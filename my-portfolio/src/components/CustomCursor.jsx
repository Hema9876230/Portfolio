import React from "react";

export default function CustomCursor() {
const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-200 blur-3xl opacity-80" />
    </div>
  );
}