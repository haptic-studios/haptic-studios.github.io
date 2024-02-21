import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Home() {
    return (
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}
      className="content-layout">
        <video className="logo-video" src={`/src/videos/split-the-world-bg.mp4#t=${Math.random() * 60}`} autoPlay loop muted/>
        <div className="logo-container">
          <img className="studio-logo" src="/src/images/haptic-studios-inverted.png"/>
          <Link to="/about" className="spaced-letters logo-link">THE TEAM</Link>
          <Link to="/games" className="spaced-letters logo-link">THE GAMES</Link>
        </div>
      </motion.div>
    )
  }