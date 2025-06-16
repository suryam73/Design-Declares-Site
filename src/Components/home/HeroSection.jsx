import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showD, setShowD] = useState(false);
  const [showExclamation, setShowExclamation] = useState(false);
  const [showMainText, setShowMainText] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const dTimer = setTimeout(() => {
      setShowD(true);
    }, 300);

    const exclamationTimer = setTimeout(() => {
      setShowExclamation(true);
    }, 800);

    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowMainText(true);
      setAnimationStarted(true);
    }, 2000);

    return () => {
      clearTimeout(dTimer);
      clearTimeout(exclamationTimer);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-between h-[700px] overflow-hidden p-4">
      {/* LEFT TEXT AREA */}
      
      <div className="font-anton uppercase text-[7rem] leading-[120px] md:text-[12rem] md:leading-[180px] text-[#e7e7e7] relative min-w-[300px]">
        <div className="relative h-full">
          {showIntro ? (
            <div className="absolute top-0 left-0 flex items-start">
              <span
                className={`transition-all duration-700 ease-out inline-block ${
                  showD
                    ? "translate-y-0 opacity-100 scale-100"
                    : "-translate-y-10 opacity-0 scale-50"
                }`}
              >
                D
              </span>
              <span
                className={`transition-all duration-700 ease-out inline-block ${
                  showExclamation
                    ? "translate-y-0 opacity-100 scale-100 ml-2"
                    : "-translate-y-10 opacity-0 scale-75 ml-2"
                }`}
              >
                !
              </span>
            </div>
          ) : (
            <>
              {/* DESIGN */}
              <div className="relative overflow-hidden">
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    animationStarted
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0"
                  }`}
                  style={{ transitionDelay: "0ms" }}
                >
                  Design
                </div>
              </div>

              {/* DECLARES */}
              <div className="relative overflow-hidden">
                <div
                  className={`transform transition-all duration-1000 ease-out  ${
                    animationStarted
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  Declares
                </div>
              </div>

              {/* UK */}
              <div className="relative overflow-hidden">
                <div
                  className={`text-primaryColor transform transition-all duration-1000 ease-out ${
                    animationStarted
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  UK
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* RIGHT PARAGRAPH AREA */}
      <div className="md:w-[500px] text-secondaryColor font-medium relative overflow-hidden mt-10 md:mt-0">
        <div
          className={`transform transition-all duration-1000 ease-out delay-[700ms] ${
            showMainText
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          Design Declares is a growing group of designers, design studios,
          agencies and institutions here to declare a climate and ecological
          emergency. As part of the global declaration movement, we commit to
          harnessing the tools of our industry to reimagine, rebuild and heal
          our world.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
