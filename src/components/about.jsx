import illuminiBgImage from '/src/images/illumini.jpg';
import tackBgImage from '/src/images/tack.jpg';
import logoSVG from '/src/images/haptic-studios-compact-logo.svg';
import CrossfadeContainer from './CrossfadeContainer';

export default function About() {
    return (
      <CrossfadeContainer>
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
            <h2 className="title spaced-letters text-border">SOUND DESIGN | DEVELOPMENT | MARKETING</h2>
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
      </CrossfadeContainer>
    );
  }