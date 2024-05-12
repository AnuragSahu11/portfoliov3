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
import AnimatedMovementIcons from "@/components/pages/landing-page/AnimatedMovementIcons";

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
  const handleBeforePageChange = (currentPage: number) => {};
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
          <BannerSection />
          <IntroSection />
          <SkillShowSection />
          <ProjectShowcaseSection />
          <AboutMeSection />
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
      <h1
        className={`text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black ${styles["color-p"]}`}
      >
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
        className={`flex items-center p-5 sm:p-10 md:p-1 justify-center flex-col md:flex-row 	gap-x-5 h-full	 md:h-4/5 xl:w-4/5 md:rounded-tr-full md:rounded-br-full ${
          styles["intro-section"]
        } ${styles["scroll-to-view-initial"]} ${
          showElement ? styles["scroll-to-view"] : ""
        }`}
      >
        <div
          className={`h-2/4 md:h-auto basis-1/3 ${styles["intro-image-container"]} `}
        >
          <Image
            width={500}
            height={500}
            alt="anurag"
            className={`${styles["intro-image"]} w-fit	 h-full md:w-5/6 md:h-5/6`}
            src="/assets/pictures/cropped_image.png"
          />
        </div>
        <div
          className={`flex text-center md:text-left flex-col basis-2/4 gap-y-5 ${styles["color-w"]}`}
        >
          <h4
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black `}
          >
            Engineer, Pixel Perfectionist
          </h4>
          <h4
            className={`text-1xl sm:text-3xl md:text-3xl lg:text-4xl font-black `}
          >
            As a web developer I have thrived in early-stage, fast-paced
            startup, where I led the front-end team. My work spanning various
            projects and features is utilized by users worldwide.
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
          <h3
            className={`text-4xl md:text-5xl lg:text-6xl font-black ${styles["color-p"]}`}
          >
            Skills
          </h3>
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

const ProjectCard = ({ crrProject, assignedProject, projectDetails }: any) => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const timeoutRef: any = useRef();
  const { imgSrc, title, description } = projectDetails;

  const cardInDom = crrProject === assignedProject || showCard;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setShowCard(crrProject === assignedProject);
    }, 500);
  }, [crrProject]);

  return crrProject === assignedProject ? (
    <>
      <div
        className={`flex w-11/12	 ${styles["entry-left"]}  ${
          styles["scroll-to-view-initial"]
        } ${showCard ? styles["scroll-to-view"] : ""} ${
          styles["project-left"]
        }`}
      >
        {" "}
        <Image
          alt=""
          className={styles["project-image"]}
          width={1500}
          height={1380}
          src={imgSrc}
        />
      </div>
      <div
        className={`p-1 sm:p-0 w-full ${styles["entry-right"]}  ${
          styles["scroll-to-view-initial"]
        } ${showCard ? styles["scroll-to-view"] : ""} ${
          styles["project-right"]
        }`}
      >
        {" "}
        <h4 className={`sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4`}>
          {title}
        </h4>
        <h4 className={`sm:text-2xl md:text-3xl lg:text-4xl font-black `}>
          {description}
        </h4>
      </div>
    </>
  ) : null;
};

const ProjectShowcaseSection = () => {
  const [crrPoject, setCrrProject] = useState<number>(-1);
  const { elementRef: scrollToViewRef, showElement } = useScrollIntoView();
  const crrProjectTimerRef: any = useRef();
  useEffect(() => {
    if (showElement) {
      crrProjectTimerRef.current = setTimeout(() => {
        setCrrProject(0);
      }, 1000);
    } else {
      setCrrProject(-1);
      if (crrProjectTimerRef.current) clearTimeout(crrProjectTimerRef.current);
    }
  }, [showElement]);

  const projectDetails = [
    {
      imgSrc: "/assets/mockups/bc-mockup.png",
      title: "@BrainCells",
      description:
        "Developed a child-friendly e-learning platform with over 30 interactive games, ensuring full responsiveness and audio features. Also engineered a streamlined event booking system.",
    },
    {
      imgSrc: "/assets/mockups/t-mockup.png",
      title: "",
      description:
        "Built an enterprise platform with role-based access control for client onboarding, invoicing, service desk, and conference room bookings and more features.",
    },
  ];

  const nextProject = () =>
    setCrrProject((crrPoject: number) => {
      if (crrPoject >= projectDetails.length - 1) {
        return 0;
      } else {
        return crrPoject + 1;
      }
    });

  const prevProject = () =>
    setCrrProject((crrPoject: number) => {
      if (crrPoject === 0) {
        return projectDetails.length - 1;
      } else {
        return crrPoject - 1;
      }
    });

  return (
    <div
      ref={scrollToViewRef}
      className={`z-10 h-screen w-screen relative flex flex-row justify-center items-center font-sans subpixel-antialiased ${styles["project-section"]} `}
    >
      <div
        className={`flex justify-center flex-col items-center gap-x-5 h-full w-full sm:h-4/5 sm:w-4/5 ${styles["color-w"]}`}
      >
        <div className={styles["project-container"]}>
          <h3 className={`lg:text-6xl font-black text-center`}>
            Work Experience
          </h3>

          <div
            className={`${styles["project"]} sm:p-1 flex flex-col sm:flex-row justify-center items-center`}
          >
            {projectDetails.map((projectDetail: any, index: number) => {
              return (
                <ProjectCard
                  key={index}
                  projectDetails={projectDetail}
                  crrProject={crrPoject}
                  assignedProject={index}
                  showElement={showElement}
                />
              );
            })}
          </div>
        </div>
        <div
          className={`${styles["project-navigation-container"]} flex flex-col md:text-2xl gap-1 ${styles["color-p"]} font-black`}
        >
          <button
            className={`${styles["project-navigation-button"]}`}
            onClick={nextProject}
          >
            Next
          </button>
          <button
            className={`${styles["project-navigation-button"]}`}
            onClick={prevProject}
          >
            Prev
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  const { elementRef: scrollToViewRef, showElement } = useScrollIntoView();
  return (
    <>
      <div
        className={`z-10 h-screen w-screen relative flex flex-col sm:flex-row font-sans subpixel-antialiased ${styles["about-section"]} ${styles["color-w"]}`}
      >
        <div
          ref={scrollToViewRef}
          className={`flex h-full flex-col-reverse sm:flex-row w-screen justify-center mt-20 pt-20 align-middle ${styles["about-heading"]}`}
        >
          <div
            className={`h-full sm:w-2/3 md:w-8/12 lg:w-5/12 p-10 flex flex-col ${
              styles["about-text"]
            }  ${styles["entry-bottom"]}  ${styles["scroll-to-view-initial"]} ${
              showElement ? styles["scroll-to-view"] : ""
            }`}
          >
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
              Want to build an Exciting New Website 🤩?
              <br></br>
              or
              <br></br>
              Give a makeover to an Existing Website 🎁?
            </h4>
            <h5 className="mt-5 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black">
              {" "}
              Get in touch with me or{" "}
              <span className="cursor-pointer hover:underline">
                View my resume.
              </span>
            </h5>
          </div>
          <div
            className={`mb-5 sm:mb-0 sm:w-1/4	flex flex-row sm:flex-col justify-evenly h-full items-center ${
              styles["about-icons"]
            } ${styles["entry-right"]}  ${styles["scroll-to-view-initial"]} ${
              showElement ? styles["scroll-to-view"] : ""
            }`}
          >
            <AnimatedMovementIcons
              iconNumber={1}
              icon={"skill-icons:linkedin"}
              redirectLink={
                "https://www.linkedin.com/in/anurag-sahu-241520193/"
              }
            />
            <AnimatedMovementIcons
              iconNumber={2}
              icon={"devicon:twitter"}
              redirectLink={"https://twitter.com/AnuragIsSahu"}
            />
            <AnimatedMovementIcons
              iconNumber={3}
              icon={"logos:google-gmail"}
              redirectLink={"mailto:anrgshu@gmail.com"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
