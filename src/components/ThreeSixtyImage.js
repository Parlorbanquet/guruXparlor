// components/ThreeSixtyImage.js
import React, { useEffect, useRef } from 'react';
import ThreeSixty from '@mladenilic/threesixty.js';

const ThreeSixtyImage = ({ imageSrc, width, height }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new ThreeSixty(containerRef.current, {
        image: imageSrc,
        width: width,
        height: height,
      });
    }
  }, [imageSrc, width, height]);

  return (
    <div
      ref={containerRef}
      style={{ width: width, height: height, position: 'relative' }}
    >
      {/* The ThreeSixty.js library will insert elements here */}
    </div>
  );
};

export default ThreeSixtyImage;
