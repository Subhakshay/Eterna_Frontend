// src/components/atoms/FadeIn.tsx
"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Start invisible and 20px down
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and 0px
            viewport={{ once: true }} // Only animate once
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};