"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const logoSVG = '/images/haptic-studios-compact-logo.svg';
const videoUrl = "/videos/split-the-world-bg.mp4";

function onMouseHover(event, videoRef) {
    videoRef.current.play();
}

function onMouseExit(event, videoRef) {
    videoRef.current.pause();
}

export default function Card({imageSrc, imageAlt, hoverVideo, title, shortDescription, playUrl, playText, tags}) {
    const videoRef = useRef(null);

    return (
        <div className="card max-w-sm rounded overflow-hidden shadow-lg bg-zinc-900"
            onMouseOver={event => onMouseHover(event, videoRef)}
            onMouseLeave={event => onMouseExit(event, videoRef)}>
            <div className="card-image-container">
                <Image className="w-full" fill src={imageSrc || logoSVG} alt={imageAlt || "Splash screen for game"}/>
                <video ref={videoRef} className="w-full hiddenVideo" src={hoverVideo || videoUrl} loop muted playsInline disablePictureInPicture/>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-3">{title}</div>
                <i className="text-base p-0 text-left">
                {shortDescription}
                </i>
                <div className="w-full text-center p-3 mt-4">
                    <a href={playUrl} className="text-black bg-gray-700 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-800">{playText}</a>
                </div>
            </div>
            {tags}
        </div>
    )
}