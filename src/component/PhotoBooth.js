import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function PhotoBooth() {
    const webcamRef = useRef(null);
    const photosRef = useRef([]); //  사진 배열을 useRef로 관리
    const [renderTrigger, setRenderTrigger] = useState(false); // 화면 갱신용 트리거
    const [shooting, setShooting] = useState(false);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            photosRef.current.push(imageSrc); // ref로 사진 저장
        }
    };

    const startPhotoBooth = async () => {
        photosRef.current = [];
        setShooting(true);
        for (let i = 0; i < 4; i++) {
            await new Promise((res) => setTimeout(res, 5000));
            capture();
        }
        setShooting(false);
        setRenderTrigger((prev) => !prev);
    };

    return (
        <div className="photobooth">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={300}
                    height={400}
                />
                <button onClick={startPhotoBooth} disabled={shooting}>
                    {shooting ? "촬영 중..." : "시작"}
                </button>
            </div>

            {photosRef.current.length === 4 && (
                <div className="result" style={{ marginTop: "20px" }}>
                    <h3>결과</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {photosRef.current.map((photo, idx) => (
                            <img key={idx} src={photo} alt={`컷 ${idx + 1}`} width={200} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PhotoBooth;
