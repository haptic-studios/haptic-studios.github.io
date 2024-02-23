"use client";

import Link from "next/link";
import Head from "next/head";
import CrossfadeContainer from "@/helpers/CrossfadeContainer";

const logoUrl = '/images/haptic-studios-inverted.png';
const videoUrl = "/videos/split-the-world-bg.mp4";

export default function Home() {
    return (
        <CrossfadeContainer>
          <Head>
              <title>Haptic Studios</title>
          </Head>
          <div className="logo-video-container">
              <video className="logo-video" src={`${videoUrl}#t=${Math.random() * 60}`} autoPlay loop muted playsInline disablePictureInPicture/>
              <div className="overlay"></div>
          </div>
          <div className="logo-container">
            <img className="studio-logo" src={logoUrl}/>
            <Link href="/about" className="spaced-letters logo-link link-hover-effect">THE TEAM</Link>
            <Link href="/games" className="spaced-letters logo-link link-hover-effect">THE GAMES</Link>
          </div>
      </CrossfadeContainer>
    )
  }