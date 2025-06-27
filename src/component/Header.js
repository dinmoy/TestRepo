// Sidebar.js
import React, {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="hamburger" onClick={() => setIsOpen(true)}>
                ☰
            </button>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    ✕
                </button>

                <nav>
                    <ul className="nav">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">GIFT</a></li>
                        <li><a href="#">LETTER</a></li>
                        <li><a href="#">PHOTO</a></li>
                    </ul>
                </nav>
                <h1 className="title">TEST</h1>
            </div>
            <h1 className="title">TEST</h1>
        </>
)
    ;
}
