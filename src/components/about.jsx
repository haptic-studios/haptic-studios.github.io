import illuminiBgImage from '/src/images/illumini.jpg';
import tackBgImage from '/src/images/tack.jpg';
import logoSVG from '/src/images/haptic-studios-compact-logo.svg';
import CrossfadeContainer from './CrossfadeContainer';
import usePageTitle from '../helpers/customHooks/usePageTitle';
import { Link } from 'react-router-dom'

export default function About() {
    usePageTitle("Haptic Studios - About");
    return (
      <CrossfadeContainer>
        <div className="parallax-section" >
          <img className="background" src={logoSVG} />
          <div className="title-container">
            <h2 className="title spaced-letters">WHO IS HAPTIC STUDIOS?</h2>
          </div>
        </div>
        <div className="divider">
          <p>Haptic Studios is an independent game development studio, based in the United States. Founded in 2024, by brothers ILLUMINI and Hey_Tack.</p>
        </div>
        <div className="parallax-section justify-end">
            <img className="background" src={illuminiBgImage} />
            <h2 className="title spaced-letters text-border">ILLUMINI</h2>
            <h2 className="title spaced-letters text-border">SOUND DESIGN | DEVELOPMENT | MARKETING</h2>
        </div>
        <div className="divider">
          <p>Sound Designer, Devleoper, and Marketing Director for Haptic Studios.</p>
          <i className="derp">"Hey there, I'm Jarett Sisk, co-founder here at Haptic Studios.
Growing up, my twin brother and I always had a controller in hand, lost in the world of pixels. Starting a game studio was honestly a dream we both had since childhood. Fast forward, and here we are, steering the ship at Haptic Studios. It's not just a job; it's a crazy, exciting journey. I hope you enjoy playing our games as much as we enjoy creating them!"</i>
        </div>
        <div className="parallax-section">
            <img className="background" src={tackBgImage} />
            <h2 className="title spaced-letters">HEY_TACK</h2>
            <h2 className="title spaced-letters">PROGRAMMING | ART | DESIGN</h2>
        </div>
        <div className="divider">
          <p>Lead Developer, Game Designer, and Artist for Haptic Studios.</p> 
          <i>"The first game I ever played was Diddy Kong Racing on the N64 - and I distinctly remember asking myself `How do people make these?`. <br/> Here I am nearly 20 years later, and there are times where I feel no closer to answering that question."</i>
        </div>
        <div className="mini-divider">
          <Link className='dark-link spaced-letters link-hover-effect' to="/">RETURN TO MAIN PAGE</Link>
        </div>
      </CrossfadeContainer>
    );
  }