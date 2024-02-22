import illuminiBgImage from '/src/images/illumini.jpg';
import tackBgImage from '/src/images/tack.jpg';
import logoSVG from '/src/images/haptic-studios-compact-logo.svg';
import CrossfadeContainer from './CrossfadeContainer';
import usePageTitle from '../helpers/customHooks/usePageTitle';

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
          <p>Haptic Studios is a independent game development studio, based in the United States. Founded in 2024, by ILLUMINI and Hey_Tack.</p>
        </div>
        <div className="parallax-section justify-end">
            <img className="background" src={illuminiBgImage} />
            <h2 className="title spaced-letters text-border">ILLUMINI</h2>
            <h2 className="title spaced-letters text-border">SOUND DESIGN | DEVELOPMENT | MARKETING</h2>
        </div>
        <div className="divider">
          <p>Sound Designer, Devleoper, and Marketing Director for Haptic Studios</p>
          <p></p>
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
      </CrossfadeContainer>
    );
  }