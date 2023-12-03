"use client";
import Image from "next/image";
import Script from "next/script";
import { useState, useRef, useEffect } from "react";
// @ts-ignore

import * as THREE from "three";

// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
      <p style={{ color: "#fff", paddingTop: "20px" }}>
        Animated website backgrounds in a few lines of code.
      </p>
    </div>
  );
}
