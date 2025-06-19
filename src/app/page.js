'use client'

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import CrossfadeContainer from "@/helpers/CrossfadeContainer";
import React from "react";
import './globals.css';

const logoUrl = '/images/haptic-studios-inverted.png';

const videos = [
  "/videos/split-the-world-bg.mp4",
  "/videos/king-of-lift.mp4",
  "/videos/legend-of-basin.mp4",
  "/videos/a-short-walk-in-the-snow.mp4"
]

export default function Home() {
  const [className, setClassName] = React.useState("hidden-video");
  const videoRef = React.useRef(null);

  const randomIndex = Math.floor(Math.random() * videos.length);
  const videoUrl = videos[randomIndex];

  React.useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleVideoReady = () => {
        setClassName("visible-video");
      };

      if (videoElement.readyState >= 2) {
        handleVideoReady();
      } else {
        videoElement.addEventListener('loadeddata', handleVideoReady);
      }

      return () => {
        videoElement.removeEventListener('loadeddata', handleVideoReady);
      };
    } 
  }, []);
    return (
      <CrossfadeContainer>
        <Head>
            <title>Haptic Studios</title>
        </Head>
        {className && 
        <div className="logo-video-container">
            <video ref={videoRef} className={`logo-video ${className}`} src={`${videoUrl}#t=${Math.random() * 10}`} autoPlay loop muted playsInline disablePictureInPicture/>
            <div className="overlay"></div>
        </div>
        }
        <div className="logo-container">
          <Image className="studio-logo" fill={true} src={logoUrl} alt="The Haptic Studios Logo"/>
          <Link href="/about" className="spaced-letters logo-link link-hover-effect">THE TEAM</Link>
          <Link href="/games" className="spaced-letters logo-link link-hover-effect">THE GAMES</Link>
        </div>
      </CrossfadeContainer>
    )
  }