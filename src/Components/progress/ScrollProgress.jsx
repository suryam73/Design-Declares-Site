import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '9px',
      backgroundColor: '#0000',
      zIndex: 9999
    }}>
      <div style={{
        height: '100%',
        width: `${scrollWidth}%`,
        backgroundColor: '#ff6347', 
        transition: 'width 0.25s ease-out'
      }}></div>
    </div>
  );
};

export default ScrollProgress;
