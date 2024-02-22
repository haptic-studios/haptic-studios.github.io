import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import videoUrl from '/src/videos/split-the-world-bg.mp4';
import logoUrl from '/src/images/haptic-studios-inverted.png';
import usePageTitle from "../helpers/customHooks/usePageTitle";
import CrossfadeContainer from "./CrossfadeContainer";

export default function Home() {
    usePageTitle("Haptic Studios - Home");
    return (
      <CrossfadeContainer>
        <div className="logo-video-container">
          <video className="logo-video" src={`${videoUrl}#t=${Math.random() * 60}`} autoPlay loop muted/>
          <div class="overlay"></div>
        </div>
        <div className="logo-container">
          <img className="studio-logo" src={logoUrl}/>
          <Link to="/about" className="spaced-letters logo-link link-hover-effect">THE TEAM</Link>
          <Link to="/games" className="spaced-letters logo-link link-hover-effect">THE GAMES</Link>
        </div>
      </CrossfadeContainer>
    )
  }