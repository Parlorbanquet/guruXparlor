import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import PANOLENS dynamically to avoid server-side issues
const PANOLENS = dynamic(() => import("panolens"), { ssr: false });

export default function Viewer() {
  const [Panolens, setPanolens] = useState(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("panolens").then((module) => {
        setPanolens(module);
      });
    }
  }, []);

  useEffect(() => {
    if (Panolens && viewerRef.current) {
      const viewer = new Panolens.Viewer({
        container: viewerRef.current,
      });

      const panorama = new Panolens.ImagePanorama("assets/images/img/1.webp");
      viewer.add(panorama);

      return () => {
        viewer.dispose();
      };
    }
  }, [Panolens]);

  return (
    <>

      <section className="menu-style-two bg-color-1">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-27.webp)" }}
          />
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-2.webp)" }}
          />
        </div>
        <div className="auto-container viewer">
          <div className="sec-title centred mb_45">
            <span className="sub-title">Impressive Experience</span>
            <h2 style={{ color: "#ffffff" }}>
              Explore Our Banquet Area <br />
              in <span style={{ color: "#c59d5f" }}>360 Degrees</span>
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <div
                  ref={viewerRef}
                  className="viewer"
                  style={{
                    width: "100%",
                    height: "500px",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
