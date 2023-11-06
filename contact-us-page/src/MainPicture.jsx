import React from "react";
import "./MainPicture.css";

export default function MainPicture() {
  return (
    <div className="MainPicture">
      <div className="row">
        <div className="col-12 p-0 pt-5 imgPlace">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
          </svg>
          <h1>Contact Us</h1>
          <img src="/MainPicture/BG Image.png" alt="/" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
