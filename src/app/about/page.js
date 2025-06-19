import Link from "next/link";
import Image from "next/image";
import CrossfadeContainer from '@/helpers/CrossfadeContainer';

const illuminiBgImage = '/images/illumini.jpg';
const tackBgImage = '/images/tack.jpg';
const logoSVG = '/images/haptic-studios-compact-logo.svg';

export default function About() {
    return (
        <CrossfadeContainer className="persp">
          <div className="parallax-section" >
            <div className="overlay"></div>
            <Image className="background" fill="true" src={logoSVG} alt="The Haptic Studios logo" />
            <div className="title-container">
              <h2 className="title spaced-letters">WHO ARE WE?</h2>
            </div>
          </div>
          <div className="divider">
            <p>Haptic Studios is an independent game development studio, based in the United States. Founded in 2024, by brothers ILLUMINI and Hey_Tack.</p>
          </div>
          <div className="parallax-section justify-end pb-10">
              <Image className="background" fill="true" src={illuminiBgImage} alt="An image of ILLUMINI, leaning against a brick wall."/>
              <h2 className="title spaced-letters text-border">ILLUMINI</h2>
              <h2 className="title spaced-letters text-border">SOUND DESIGN | DEVELOPMENT | MARKETING</h2>
          </div>
          <div className="divider">
            <p>Sound Designer, Devleoper, and Marketing Director for Haptic Studios.</p>
            <i>&quot;Hey there, I&apos;m Jarett Sisk, co-founder here at Haptic Studios.
  Growing up, my twin brother and I always had a controller in hand, lost in the world of pixels. Starting a game studio was honestly a dream we both had since childhood. Fast forward, and here we are, steering the ship at Haptic Studios. It&apos;s not just a job; it&apos;s a crazy, exciting journey. I hope you enjoy playing our games as much as we enjoy creating them!&quot;</i>
          </div>
          <div className="parallax-section">
              <Image className="background-left" fill="true" src={tackBgImage} alt="Hey_Tack, sitting at a computer in a dark room, wearing a blanket"/>
              <h2 className="title spaced-letters">HEY_TACK</h2>
              <h2 className="title spaced-letters">PROGRAMMING | ART | DESIGN</h2>
          </div>
          <div className="divider">
            <p>Lead Developer, Game Designer, and Artist for Haptic Studios.</p> 
            <i>&quot;The first game I ever played was Diddy Kong Racing on the N64 - and I distinctly remember asking myself `How do people make these?`. <br/> Here I am nearly 20 years later, and there are times where I feel no closer to answering that question.&quot;</i>
            <br/>
            <Link className='dark-link spaced-letters link-hover-effect' href="/">RETURN TO MAIN PAGE</Link>
          </div>
          <div className="mini-divider"></div>
        </CrossfadeContainer>
    );
  }