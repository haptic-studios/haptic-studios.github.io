"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const logoSVG = '/images/haptic-studios-compact-logo.svg';
const videoUrl = "/videos/split-the-world-bg.mp4";

function onMouseHover(event, videoRef) {
    console.log(videoRef)
    videoRef.current.play();
}

function onMouseExit(event, videoRef) {
    console.log(videoRef)
    videoRef.current.pause();
}

export default function Card({cardImageSrc, cardImageAlt, hoverVideo, title, shortDescription}) {
    const videoRef = useRef(null);
    return (
        <div className="card max-w-sm rounded overflow-hidden shadow-lg"
            onMouseOver={event => onMouseHover(event, videoRef)}
            onMouseLeave={event => onMouseExit(event, videoRef)}>
            <div className="card-image-container">
                <Image className="w-full" fill src={cardImageSrc || logoSVG} alt={cardImageAlt || "Splash screen for game"}/>
                <video ref={videoRef} className="w-full hiddenVideo" src={hoverVideo || videoUrl} loop muted playsInline disablePictureInPicture/>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                {shortDescription}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
  }
