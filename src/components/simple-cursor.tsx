'use client'

import React, { useEffect, useState, useRef, RefObject } from 'react';
import styles from './simple-cursor.module.css';
import {
    motion,
    useMotionValue,
    useSpring,
    // transform removed (not needed)
    // animate removed (only needed for hover effect)
    MotionValue
} from 'motion/react'; // CORRECTED import path

// No props needed anymore if stickyElement is removed
// interface StickyCursorProps {
//   stickyElement: RefObject<HTMLElement | null>;
// }

// Removed React.FC and props as they are no longer needed
const SimpleCursor = () => {

    // Removed isHovered state
    // const [isHovered, setIsHovered] = useState<boolean>(false);

    // Removed cursor ref (not used in simplified version)
    // const cursor = useRef<HTMLDivElement | null>(null);

    // Fixed cursor size
    const cursorSize = 15;

    // Mouse position MotionValues
    const mouse = {
        x: useMotionValue<number>(0),
        y: useMotionValue<number>(0)
    };

    // Removed scale MotionValues
    // const scale = { ... };

    // Smooth options remain the same
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

    // Smoothed mouse position MotionValues
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    };

    // Removed rotate function
    // const rotate = (...) => { ... };

    // Simplified mouse move handler
    const manageMouseMove = (e: MouseEvent): void => {
        const { clientX, clientY } = e;
        // Directly update mouse position, offsetting by half cursor size
        // to center the cursor element on the pointer
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    };

    // Removed manageMouseOver and manageMouseLeave handlers
    // const manageMouseOver = (...) => { ... };
    // const manageMouseLeave = (...) => { ... };

    // Simplified useEffect to only track window mousemove
    useEffect(() => {
        // Add window listener
        window.addEventListener("mousemove", manageMouseMove);

        // Cleanup function
        return () => {
            // Remove window listener
            window.removeEventListener("mousemove", manageMouseMove);
        };
        // Empty dependency array: runs only once on mount/unmount
    }, []); // Removed dependencies: isHovered, stickyElement

    // Removed template function
    // const template = (...) => { ... };

    return (
        // Removed outer container div (styles.cursorContainer) as it might not be needed
        // If you need it for specific reasons, ensure the class exists in your CSS module
        // <div className={styles.cursorContainer}>
            <motion.div
                // Removed transformTemplate prop
                // transformTemplate={template}
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                    // Removed scaleX and scaleY styles
                    // scaleX: scale.x,
                    // scaleY: scale.y,
                }}
                // Animate width/height directly if needed, or set in CSS
                animate={{
                    width: cursorSize,
                    height: cursorSize
                }}
                 // Make sure styles.cursor class provides necessary base styles
                 // (position: fixed, background, border-radius, pointer-events, z-index)
                className={styles.cursor}
                // Removed ref={cursor} as it's not used
                // ref={cursor}
            >
            </motion.div>
        // </div>
    );
};

// Renamed export to reflect the component's new purpose
export default SimpleCursor;