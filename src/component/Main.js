import React, {useState} from "react";
import Carousel from "./Carousel";
export default function Main() {

    const [images, setImages] = useState([
        "/image/gift.png",
        "/image/gift.png",
        "/image/gift.png"
    ]);

    const handleClick = (index) => {
        const newImages = [...images];
        newImages[index] = "/image/cd.png";
        setImages(newImages);
    };
    const [isSpinning, setIsSpinning] = useState(false);

    const click = () => {
        setIsSpinning((prev) => !prev);
    };
    return (
        <>
          <div>
              <div className="main">
                  <div className="player-wrapper" onClick={click}>
                      <img src="/image/플레이어.png" className="player-img" alt="플레이어" />
                      <img
                          src="/image/cd.png"
                          className={`cd-img ${isSpinning ? "spin" : ""}`}
                          alt="CD"
                      />
                      {isSpinning && (
                          <video src="/image/song.mp4" playsInline={false} muted={false} loop autoPlay />
                      )}
                  </div>
              </div>
              <div className="photo">
                  <div className="slider">
                      <div className="film-border top-border"></div>
                      <Carousel />
                      <div className="film-border bottom-border"></div>
                  </div>
              </div>
              <div className="gift">
                  {images.map((src, index) => (
                      <img
                          key={index}
                          src={src}
                          alt={`강아지${index + 1}`}
                          onClick={() => handleClick(index)}
                          style={{ cursor: "pointer", width: "150px", marginRight: "10px" }}
                      />
                  ))}
              </div>
              <div className="letter">
                  <h1>TEST</h1>
              </div>
          </div>
        </>
    );
}