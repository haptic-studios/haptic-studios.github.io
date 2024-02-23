import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
            <video className="logo-video" src={`${videoUrl}#t=${Math.random() * 60}`} autoPlay loop muted playsinline="true" disablePictureInPicture="true"/>
            <div className="overlay"></div>
        </div>
        <div className="logo-container">
          <Image className="studio-logo" fill={true} src={logoUrl} alt="The Haptic Studios Logo"/>
          <Link href="/about" className="spaced-letters logo-link link-hover-effect">THE TEAM</Link>
          <Link href="/games" className="spaced-letters logo-link link-hover-effect">THE GAMES</Link>
        </div>
      </CrossfadeContainer>
    )
  }
