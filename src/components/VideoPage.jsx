/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../assets/WelcomeVideo.mp4";
import "../styles/videopage.css";

function VideoPage() {
    const navigate = useNavigate();
    const [fade, setFade] = useState(false);

    const handleVideoClick = () => {
        setFade(true);


        setTimeout(() => {
            navigate("/homepage");
        }, 500);
    };

    return (
        <section
            className={`position-relative overflow-hidden page-fade ${fade ? "fade-out" : ""}`}
            style={{ height: "100vh", cursor: "pointer" }}
            onClick={handleVideoClick}
        >

            <video
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={Video} type="video/mp4" />
            </video>

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

            <div className="position-relative z-1 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
                <h1 className="fw-bold display-1">Saikrupa Food Services</h1>
                <p className="fs-3 mt-2">
                    Fresh • Hygienic • Delicious
                </p>
            </div>
        </section>
    );
}

export default VideoPage;*/


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../assets/WelcomeVideo.mp4";
import "../styles/videopage.css";

function VideoPage() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  // 🔥 Only this page → disable scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVideoClick = () => {
    setFade(true);

    setTimeout(() => {
      navigate("/homepage");
    }, 500);
  };

  return (
    <section
      className={`page-fade ${fade ? "fade-out" : ""}`}
      onClick={handleVideoClick}
      style={{ cursor: "pointer" }}
    >
      {/* Background Video */}
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px"
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
          Saikrupa Food Services
        </h1>
        <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
          Fresh • Hygienic • Delicious
        </p>
      </div>
    </section>
  );
}

export default VideoPage;