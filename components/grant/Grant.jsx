'use client'
import React, { useEffect } from "react";
import "./GrantTracks.css";

function GrantTracks() {

  useEffect(() => {
    const containers = document.querySelectorAll(".hero-image-container");

    containers.forEach((container) => {
      let images = container.querySelectorAll(".hero-img");
      let index = 0;

      setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 4500);
    });
  }, []);

  return (
    <section className="grant-section bg-noise">

      <div className="container">

        {/* HEADER */}
        <div className="header">
          <h1 className="main-title">
            GRANT <span className="red-text">TRACKS.</span>
          </h1>
          <p className="subtitle">
            Empowering builders through structured and scalable funding programs.
          </p>
        </div>

        {/* TRACK 1 */}
        <div className="grid">

          <div className="hero-wrapper">
            <div className="hero-card">
              <div className="hero-image-container">
                <img src="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D" className="hero-img 
                 active" />
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zOF9waG90b19hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaF8yNzkxNDRlNC0zNGE3LTQxMmYtYmU2YS00MTY1ZGIyYjE1MmFfMS5qcGc.jpg" className="hero-img object-cover active" />
               <img src="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D" className="hero-img 
                 active" />
              </div>
              <div className="hero-glow-1"></div>
              <div className="hero-glow-2"></div>
            </div>
          </div>

          <div>
            <h2>initGrant()</h2>
            <p className="red-text">Up to $50,000</p>
            <p>
              Designed for <span className="red-text">early-stage innovators</span> and developers exploring 
              <span className="red-text"> new blockchain concepts</span>.
            </p>

            <ul>
              <li>✔ Prototype & idea validation</li>
              <li>✔ Research-based innovation</li>
              <li>✔ Early product development</li>
            </ul>
          </div>

        </div>

        {/* TRACK 2 */}
        <div className="grid">

          <div>
            <h2>buildGrant()</h2>
            <p className="red-text">Up to $100,000</p>
            <p>
              Tailored for <span className="red-text">active development</span> and 
              <span className="red-text"> testnet deployment</span>.
            </p>

            <ul>
              <li>✔ Smart contract deployment</li>
              <li>✔ Scalable architecture</li>
              <li>✔ MVP to production</li>
            </ul>
          </div>

          <div className="hero-wrapper">
            <div className="hero-card">
              <div className="hero-image-container">
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zOF9waG90b19hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaF8yNzkxNDRlNC0zNGE3LTQxMmYtYmU2YS00MTY1ZGIyYjE1MmFfMS5qcGc.jpg" className="hero-img object-cover active" />
                <img src="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D" className="hero-img 
                 active" />
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zOF9waG90b19hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaF8yNzkxNDRlNC0zNGE3LTQxMmYtYmU2YS00MTY1ZGIyYjE1MmFfMS5qcGc.jpg" className="hero-img object-cover active" />
              </div>
              <div className="hero-glow-1"></div>
              <div className="hero-glow-2"></div>
            </div>
          </div>

        </div>

        {/* TRACK 3 */}
        <div className="grid">

          <div className="hero-wrapper">
            <div className="hero-card">
              <div className="hero-image-container">
                <img src="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D" className="hero-img 
                 active" />
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zOF9waG90b19hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaF8yNzkxNDRlNC0zNGE3LTQxMmYtYmU2YS00MTY1ZGIyYjE1MmFfMS5qcGc.jpg" className="hero-img object-cover active" />
               <img src="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D" className="hero-img 
                 active" />
              </div>
              <div className="hero-glow-1"></div>
              <div className="hero-glow-2"></div>
            </div>
          </div>

          <div>
            <h2>scaleGrant()</h2>
            <p className="red-text">Up to $500,000</p>
            <p>
              Built for <span className="red-text">high-growth startups</span> and 
              <span className="red-text"> production-ready systems</span>.
            </p>

            <ul>
              <li>✔ High-performance dApps</li>
              <li>✔ Ecosystem scaling</li>
              <li>✔ Enterprise solutions</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

export default GrantTracks;