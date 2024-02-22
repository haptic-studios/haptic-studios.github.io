import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import illuminiBgImage from '/src/images/illumini.jpg';
import tackBgImage from '/src/images/tack.jpg';
import logoSVG from '/src/images/haptic-studios-compact-logo.svg';

export default function About() {
    return (
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}
      className="content-layout">
        <div className="parallax-section" >
          <img className="background" src={logoSVG} />
          <div className="title-container">
            <h2 className="title spaced-letters">WHO IS HAPTIC STUDIOS?</h2>
          </div>
        </div>
        <div className="divider">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="parallax-section justify-end">
            <img className="background" src={illuminiBgImage} />
            <h2 className="title spaced-letters text-border">ILLUMINI</h2>
            <h2 className="title spaced-letters text-border">AUDIO STUFF | ENGINEERING</h2>
        </div>
        <div className="divider">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="parallax-section">
            <img className="background" src={tackBgImage} />
            <h2 className="title spaced-letters">HEY_TACK</h2>
            <h2 className="title spaced-letters">PROGRAMMING | ART | DESIGN</h2>
        </div>
        <div className="divider">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

        {/* <img src={illuminiBgImage} />
        <h1>ILLUMINI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <img src={tackBgImage} />
        <h1>HEY_TACK</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
      </motion.div>
    );
  }