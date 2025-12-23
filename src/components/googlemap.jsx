import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Googlemap() {
  const destination = "19.02957603049381,72.8669478004995";
  const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {/* 👇 width control using bootstrap columns */}
        <div className="col-11 col-md-20 col-lg-15">

          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

            {/* Map (medium height) */}
            <div style={{ height: "350px" }}>
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps?q=${destination}&z=15&output=embed`}
                className="w-100 h-100 border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Footer */}
            <div
              className="card-body text-center bg-light"
              role="button"
              onClick={() => window.open(directionUrl, "_blank")}
            >
              <h5 className="fw-bold mb-1">Saikrupa Food Services</h5>
              <p className="text-muted mb-2">Tap to get directions 📍</p>
              <span className="badge bg-success px-3 py-2">
                Open in Google Maps
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Googlemap;
