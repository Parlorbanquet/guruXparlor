import React, { useEffect, useState } from 'react';

const FooterWidgets = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle window resizing
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 1190); // Set mobile state based on viewport width
      }
    };

    if (typeof window !== 'undefined') {
      // Set initial mobile state
      setIsMobile(window.innerWidth <= 1190);

      // Load the GTranslate popup script
      const script = document.createElement('script');
      script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
      script.defer = true;
      document.body.appendChild(script);

      window.gtranslateSettings = {
        "default_language": "en",
        "languages": ["en", "fr", "de", "it", "es", "gu", "hi"],
        "wrapper_selector": ".gtranslate_wrapper",
        "horizontal_position": "left",
        "vertical_position": "bottom",
        "flag_style": "3d",
        "alt_flags": { "en": "usa" }
      };

      // Add resize event listener
      window.addEventListener('resize', handleResize);
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        const script = document.querySelector('script[src="https://cdn.gtranslate.net/widgets/latest/float.js"]');
        if (script) {
          document.body.removeChild(script);
        }
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Inline style based on viewport width
  const wrapperStyle = {
    display: isMobile ? 'block' : 'none',
    position: 'fixed',
    bottom: '10px',
    left: '10px',
    zIndex: 1000
  };

  const gtFloatWrapperStyle = {
    top: '22px !important'
  };

  return (
    <div className="gtranslate_wrapper" style={wrapperStyle}>
      <div id="gt_float_wrapper" style={gtFloatWrapperStyle}></div>
    </div>
  );
};

export default FooterWidgets;
