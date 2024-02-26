import CrossfadeContainer from '@/helpers/CrossfadeContainer';
import Card from '@/components/card';

const splitTheWorldImage = './images/split-the-world.png';
const splitTheWorldVideo = './videos/split-the-world-bg.mp4';

const kingOfLiftImage = './images/king-of-lift.png';
const kingOFLiftVideo = './videos/king-of-lift.mp4';

export default function Games() {
    return (
        <CrossfadeContainer>
          <div className="games-title-container">
            <h1 className="spaced-letters">GAMES</h1>
          </div>
          <div className="game-list">
            <Card 
              title="Split The World" 
              imageSrc={splitTheWorldImage}
              imageAlt="The title screen for the game 'Split The World'"
              hoverVideo={splitTheWorldVideo}
              shortDescription="Wield the legendary sword, and cleave the world asunder."
            ></Card>
            <Card 
              title="King of Lift" 
              imageSrc={kingOfLiftImage}
              imageAlt="The title image for the game 'King of Lift'"
              hoverVideo={kingOFLiftVideo}
              shortDescription="You've fallen in love with the pricess, do you have the strength to win the King's approval?"
            ></Card>
            <div className="stay-in-touch">
              <i>And more to come...</i>
            </div>
          </div>
        </CrossfadeContainer>
    );
  }