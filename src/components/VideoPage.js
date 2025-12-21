import React from "react";
import "../styles/WelcomeVideo.css";

function VideoPage() {
    const handleSwipeUp = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    }
    return (
        <>
            <section className="video-container" onClick={handleSwipeUp}>
                <div className="video-box">
                    <video
                        className="video-bg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/assets/WelcomeVideo.mp4" type="video/mp4" />
                    </video>
                    <div className="video-text">
                        <h1>Saikrupa Food Services</h1>
                        <p>Fresh  •  Hygienic  •  Delicious</p>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <h2>Home Page</h2>
                <p>This is your main content</p>
            </section>
        </>
    );
}

export default VideoPage;