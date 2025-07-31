import React, { useEffect, useState, useRef } from "react";
import "./imageslider.css";

const mediaFiles = [
  { type: "image", src: "/assets/ad.png" },
  { type: "image", src: "/assets/image1.jpg" },
  { type: "image", src: "/assets/image2.jpg" },
  { type: "image", src: "/assets/image4.jpg" },
  { type: "image", src: "/assets/image5.jpg" },
  { type: "image", src: "/assets/image2.1.jpg" },
  { type: "image", src: "/assets/image6.jpg" },
  { type: "image", src: "/assets/image7.jpg" },
  { type: "image", src: "/assets/image3.jpg" },
  { type: "image", src: "/assets/image8.jpg" },
  { type: "image", src: "/assets/image9.jpg" },
];

const AUTO_PLAY_INTERVAL = 9000;

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliderContainer">
      <div
        className="sliderTrack"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out"
        }}
        ref={slideRef}
      >
        {mediaFiles.map((media, index) => (
          <div className="slide" key={index}>
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={`Slide ${index + 1}`}
                className="slidecontent"
              />
            ) : (
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="slidecontent"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
