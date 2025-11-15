// src/components/organisms/LoopingVideoPlayer.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const LoopingVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [opacity, setOpacity] = useState(0);
    const isInitialMount = useRef(true);

    // 1. Play video and fade in on mount
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setTimeout(() => {
                video.play();
                setOpacity(1);
                isInitialMount.current = false;
            }, 100);
        }
    }, []);

    // 2. This effect listens for when the video fades out
    useEffect(() => {
        if (opacity === 0 && !isInitialMount.current) {

            // It has just faded out, wait 1 second
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.currentTime = 0; // Rewind the video
                    videoRef.current.play(); // Play it
                    setOpacity(1); // Fade back in
                }
            }, 200); // 1-second delay before looping
        }
    }, [opacity]);

    // 3. This is the event handler for when the 14-second video ends
    const handleVideoEnd = () => {
        setOpacity(0); // Start the fade-out
    };

    return (
        <motion.video
            ref={videoRef}
            src="/animation.mp4"

       
            className="absolute top-0 left-0 h-full w-full object-cover"

            initial={{ opacity: 0 }}
            animate={{ opacity: opacity }}
            transition={{ duration: 1, ease: 'easeInOut' }}

            onEnded={handleVideoEnd}

            muted={true}
            playsInline={true}
            loop={false}
        />
    );
};