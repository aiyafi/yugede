'use client'

import React, { useEffect, useState, useRef, RefObject } from 'react';
import styles from './simple-cursor.module.css';
import {
    motion,
    useMotionValue,
    useSpring,
    MotionValue
} from 'motion/react';

const SimpleCursor = () => {
    const cursorSize = 15;

    const mouse = {
        x: useMotionValue<number>(0),
        y: useMotionValue<number>(0)
    };

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    };

    const manageMouseMove = (e: MouseEvent): void => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, []);

    return (
            <motion.div
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                }}
                animate={{
                    width: cursorSize,
                    height: cursorSize
                }}
                className={styles.cursor}
            >
            </motion.div>
    );
};

export default SimpleCursor;