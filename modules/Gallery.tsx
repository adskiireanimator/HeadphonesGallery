"use client";
import React, { useState, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

type slide = {
  id: number;
  type: "node" | "img";
  previewImg: string;
  img: string;
  node?: ReactNode;
};

const slides: slide[] = [
  {
    id: 0,
    type: "node",
    previewImg: "/icon_01.jpg",
    img: "",
    node: (
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Headphones Oklick HS-L770G"
          frameBorder={"0"}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          width="540"
          height="540"
          src="https://sketchfab.com/models/82c9207c4da34b8f96659f069af0a941/embed?autostart=1&dnt=1"
        ></iframe>{" "}
      </div>
    ),
  },
  {
    id: 1,
    type: "node",
    previewImg: "/icon_02.jpg",
    img: "",
    node: <div className="bg-black"></div>,
  },
  {
    id: 2,
    type: "img",
    previewImg: "/001.jpg",
    img: "/001.jpg",
  },
  {
    id: 3,
    type: "img",
    previewImg: "/002.jpg",
    img: "/002.jpg",
  },
  {
    id: 4,
    type: "img",
    previewImg: "/003.jpg",
    img: "/003.jpg",
  },
  {
    id: 5,
    type: "img",
    previewImg: "/004.jpg",
    img: "/004.jpg",
  },
  {
    id: 6,
    type: "img",
    previewImg: "/005.jpg",
    img: "/005.jpg",
  },
];

export const Gallery: React.FC = () => {
  const [activeId, setId] = useState(0);

  function lastSlide() {
    if (activeId != 0) {
      setId(activeId - 1);
    }
  }
  function nextSlide() {
    if (activeId != 6) {
      setId(activeId + 1);
    }
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex gap-x-8 items-center">
        <button
          className="w-8 h-8 border-black border-2 rounded-[30px] pl-0.5"
          onClick={lastSlide}
        >
          <svg
            className="rotate-180"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7072 4.22185C13.0977 3.83132 13.7308 3.83132 14.1214 4.22185L21.1924 11.2929C21.583 11.6834 21.583 12.3166 21.1924 12.7071L14.1214 19.7782C13.7308 20.1687 13.0977 20.1687 12.7072 19.7782C12.3166 19.3877 12.3166 18.7545 12.7072 18.364L18.0711 13L3.51477 13C2.96249 13 2.51477 12.5523 2.51477 12C2.51477 11.4477 2.96249 11 3.51477 11L18.0711 11L12.7072 5.63606C12.3166 5.24554 12.3166 4.61237 12.7072 4.22185Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="relative h-full w-full">
          {slides[activeId].type === "img" && (
            <Image src={slides[activeId].img} alt="" fill objectFit="contain" />
          )}
          {slides[activeId].type === "node" && slides[activeId].node}
        </div>
        <button
          className="w-8 h-8 border-black border-2 rounded-[30px] pl-0.5"
          onClick={nextSlide}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7072 4.22185C13.0977 3.83132 13.7308 3.83132 14.1214 4.22185L21.1924 11.2929C21.583 11.6834 21.583 12.3166 21.1924 12.7071L14.1214 19.7782C13.7308 20.1687 13.0977 20.1687 12.7072 19.7782C12.3166 19.3877 12.3166 18.7545 12.7072 18.364L18.0711 13L3.51477 13C2.96249 13 2.51477 12.5523 2.51477 12C2.51477 11.4477 2.96249 11 3.51477 11L18.0711 11L12.7072 5.63606C12.3166 5.24554 12.3166 4.61237 12.7072 4.22185Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="h-16 w-full flex gap-2 justify-between px-5">
        {slides.map((item, index) => {
          return (
            <div
              className={clsx("relative h-[60px] w-[60px] cursor-pointer", {
                "border-2 border-gray": item.id === activeId,
              })}
              key={index}
              onClick={() => setId(item.id)}
            >
              <Image src={item.previewImg} alt="" fill objectFit="contain" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
