"use client";

import { motion } from "framer-motion";
import { useLoading } from "./LoadingContext";
import { useMenu } from "./MenuContext";

export default function ReservationButton() {
  const { loaderShowing } = useLoading();
  const { menuOpen } = useMenu();

  if (loaderShowing || menuOpen) return null;

  return (
    <motion.a
      href="https://app.squareup.com/appointments/book/8lmd4dlezyia9h/L8E7R932PDW8K/start"
      target="_blank"
      rel="noopener noreferrer"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 20px",
        backgroundColor: "#FAF7F2",
        color: "#2D4A2D",
        border: "1px solid #2D4A2D",
        borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
        boxShadow: "0 8px 24px rgba(45,74,45,0.15)",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontWeight: 300,
        fontSize: "0.9375rem",
        letterSpacing: "0.05em",
        textDecoration: "none",
        whiteSpace: "nowrap",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      予約はこちら
    </motion.a>
  );
}
