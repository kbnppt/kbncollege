import React, { useState, useEffect, useRef } from "react";
import styles from "./DotRing.module.css";

const DotRing = () => {
    const cursorRef1 = useRef(null)
    const cursorRef2 = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };
        // if (cursorRef1.current == null || cursorRef1 == null || cursorRef2.current == null || cursorRef2 == null)
        //     return;
        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);
    return (
        <>
            <div
                style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
                className={styles.ring}
                ref={cursorRef1}
            ></div>
            <div
                className={styles.dot}
                style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
                ref={cursorRef2}
            ></div>
        </>
    );
};

export default DotRing;
