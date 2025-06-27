import React, {useState} from "react";
import Webcam from "react-webcam";
import Carousel from "./Carousel";
import PhotoBooth from "./PhotoBooth";

export default function Main() {

    const [images, setImages] = useState([
        "/image/강아지2.jpg",
        "/image/강아지2.jpg",
        "/image/강아지2.jpg"
    ]);

    const handleClick = (index) => {
        const newImages = [...images];
        newImages[index] = "/image/강아지1.jpg";
        setImages(newImages);
    };

    return (
        <>
          <div>
              <div className="main">
                      <h1>test1</h1>
                  </div>
              <div className="photo">
                  <div className="slider">
                      <Carousel />
                  </div>
              </div>
              <div className="photoBooth">
                  <PhotoBooth />
              </div>
              {/*<div>*/}
              {/*    <h1>TEST</h1>*/}
              {/*    <div className="gift">*/}
              {/*        {images.map((src, index) => (*/}
              {/*            <img*/}
              {/*                key={index}*/}
              {/*                src={src}*/}
              {/*                alt={`강아지${index + 1}`}*/}
              {/*                onClick={() => handleClick(index)}*/}
              {/*                style={{ cursor: "pointer", width: "150px", marginRight: "10px" }}*/}
              {/*            />*/}
              {/*        ))}*/}
              {/*    </div>*/}
              {/*</div>*/}
          </div>
        </>
    );
}