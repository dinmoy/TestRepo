import React from "react";
import Webcam from "react-webcam";

export default function Main() {
    return (
        <>
          <div>
              <div className="main">
                  <h1>test1</h1>
              </div>
              <div className="photo">
                  <div className="slider">
                      <h1>p</h1>
                  </div>
              </div>
              <div className="photoBooth">
                  {/*<Webcam  width={300} height={200} />*/}
              </div>
              <div>
                  <h1>TEST</h1>
                  <div className="gift">
                      <img src="/image/강아지2.jpg" alt="강아지" />
                      <img src="/image/강아지2.jpg" alt="강아지" />
                      <img src="/image/강아지2.jpg" alt="강아지" />
                  </div>
              </div>
          </div>
        </>
    );
}