"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../css/page.module.css";
// @ts-ignore

import * as THREE from "three";

// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";
import ReactPageScroller from "react-page-scroller";
import Image from "next/image";
import useScrollIntoView from "@/hooks/useScrollIntoView";
import { Icon } from "@iconify/react";
import AnimatedEntryIcons from "@/components/pages/landing-page/AnimatedEntryIcons";

// ** CONSTANTS
const primaryTextColor = "#F25F5C";
const primaryColor = "#f95738";
const secondaryColor = "#e63946";
const backgroundColor = "#edf2f4";

export default function Home() {
  // ** STATE
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  // ** REF
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
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: primaryColor,
          color2: secondaryColor,
          backgroundColor: backgroundColor,
          backgroundAlpha: 1,
          separation: 70,
          quantity: 3,
          birdSize: 1.5,
          colorMode: "variance",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // ** FUNCTIONS
  const handleBeforePageChange = (currentPage: number) => {
    console.log(currentPage);
  };
  const handlePageChange = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  const customPageNumber = () => {};

  return (
    <>
      <div className="fixed top-0 left-0 z-0" ref={vantaRef}>
        <ReactPageScroller
          pageOnChange={handlePageChange}
          onBeforePageScroll={handleBeforePageChange}
          customPageNumber={currentPage}
        >
          <ProjectShowcaseSection />

          <BannerSection />
          <IntroSection />
          <SkillShowSection />
        </ReactPageScroller>
      </div>
    </>
  );
}

const BannerSection = () => {
  return (
    <div
      className={`z-10 h-screen w-screen relative flex justify-center	items-center font-sans subpixel-antialiased	`}
    >
      <h1 className={`text-8xl font-black ${styles["color-p"]}`}>
        <span
          className={`${styles["text-focus-in"]} ${styles["animation-delay-one"]}`}
        >
          Hi, I am
        </span>
        <br />
        <span
          className={`${styles["text-focus-in"]} ${styles["animation-delay-two"]}`}
        >
          Anurag Sahu
        </span>
        <br />
        <span
          className={`${styles["text-focus-in"]} ${styles["animation-delay-three"]}`}
        >
          a Fullstack Developer
        </span>
      </h1>
      {/* <div className="text-7xl">
    <h1 style={{ color: secondaryColor, paddingTop: "20px" }}>
      Animated website backgrounds in a few lines of code.
    </h1>
  </div> */}
    </div>
  );
};
const IntroSection = () => {
  const { elementRef: scrollToViewRef, showElement } = useScrollIntoView();
  return (
    <div
      className={`z-10 h-screen w-screen relative flex flex-row	items-center font-sans subpixel-antialiased ${styles["intro-section-container"]}`}
    >
      {/* <div
        className={`${styles["intro-section-background-icon-container"]} ${styles["rotate"]}`}
      >
        <Icon className={`${styles["color-p"]}`} icon="mdi:react" />{" "}
      </div> */}
      <div
        ref={scrollToViewRef}
        className={`flex justify-center flex-row items-center	gap-x-5 h-4/5 w-4/5 ${
          styles["intro-section"]
        } ${styles["scroll-to-view-initial"]} ${
          showElement ? styles["scroll-to-view"] : ""
        }`}
      >
        <div className={`basis-1/3 ${styles["intro-image-container"]} `}>
          <Image
            width={500}
            height={500}
            alt="anurag"
            className={`${styles["intro-image"]}`}
            src="/assets/pictures/fotor-ai-20231203173059-modified.png"
          />
        </div>
        <div className={`flex flex-col basis-2/4 gap-y-5`}>
          <h4 className={`text-6xl font-black `}>
            Hi, I am Anurag, Nice to meet you
          </h4>
          <h4 className={`text-4xl font-black `}>
            Working in a startup as a team leader has been a rewarding
            experience for me. I love creating complex web applications from the
            ground up and solving problems with logic and code in an efficient
            way.
          </h4>
        </div>
      </div>
    </div>
  );
};

const SkillShowSection = () => {
  const { elementRef: scrollToViewRef, showElement } = useScrollIntoView();

  return (
    <div
      className={`z-10 h-screen w-screen relative flex flex-row justify-center	items-center font-sans subpixel-antialiased`}
    >
      <div
        ref={scrollToViewRef}
        className="flex justify-center flex-col items-center gap-x-5 h-4/5 w-4/5"
      >
        <div>
          <h3 className={`text-6xl font-black ${styles["color-p"]}`}>Skills</h3>
        </div>
        <div className="flex flex-row p-11 gap-7 flex-wrap">
          <AnimatedEntryIcons
            icon="devicon:react"
            entryDirection={"entry-top-left"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="logos:nextjs-icon"
            entryDirection={"entry-left"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="vscode-icons:file-type-js-official"
            entryDirection={"entry-bottom-left"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="logos:typescript-icon"
            entryDirection={"entry-bottom"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="logos:nodejs-icon-alt"
            entryDirection={"entry-top-right"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="vscode-icons:file-type-mongo"
            entryDirection={"entry-right"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="logos:material-ui"
            entryDirection={"entry-top-right"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="logos:firebase"
            entryDirection={"entry-bottom-left"}
            showElement={showElement}
          />

          <AnimatedEntryIcons
            icon="devicon:vscode"
            entryDirection={"entry-bottom"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="devicon:css3"
            entryDirection={"entry-top-left"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="logos:redux"
            entryDirection={"entry-bottom"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="vscode-icons:file-type-html"
            entryDirection={"entry-top-right"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="vscode-icons:file-type-tailwind"
            entryDirection={"entry-right"}
            showElement={showElement}
          />
          <AnimatedEntryIcons
            icon="logos:github-icon"
            entryDirection={"entry-bottom-right"}
            showElement={showElement}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectShowcaseSection = () => {
  return (
    <div
      className={`z-10 h-screen w-screen relative flex flex-row justify-center items-center font-sans subpixel-antialiased ${styles["project-section"]}`}
    ></div>
  );
};
