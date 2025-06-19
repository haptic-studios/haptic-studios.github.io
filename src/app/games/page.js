import CrossfadeContainer from '@/helpers/CrossfadeContainer';
import Card from '@/components/card';

const splitTheWorldImage = './images/split-the-world.png';
const splitTheWorldVideo = './videos/split-the-world-bg.mp4';

const kingOfLiftImage = './images/king-of-lift.png';
const kingOFLiftVideo = './videos/king-of-lift.mp4';

const shortWalkInTheSnowImage = './images/a-short-walk-in-the-snow.png';
const shortWalkInTheSnowVideo = './videos/a-short-walk-in-the-snow.mp4';

const legendOfBasinImage = './images/legend-of-basin.png';
const legendOfBasinVideo = './videos/legend-of-basin.mp4';

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
              playText="Download Now on itch.io"
              playUrl="https://hey-tack.itch.io/split-the-world"
              tags={(
                <div className="px-6 pt-2 pb-2">
                  <span className={`inline-block bg-cyan-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>Windows</span>
                  <span className={`inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2`}>Pirate Software Jam #14</span>
                </div>
              )}
            ></Card>
            <Card 
              title="King of Lift" 
              imageSrc={kingOfLiftImage}
              imageAlt="The title image for the game 'King of Lift'"
              hoverVideo={kingOFLiftVideo}
              shortDescription="You've fallen in love with the pricess, do you have the strength to win the King's approval?"
              playText="Play Now on itch.io"
              playUrl="https://hey-tack.itch.io/king-of-lift"
              tags={(
                <div className="px-6 pt-2 pb-2">
                  <span className={`inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2`}>Browser</span>
                  <span className={`inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>Gotm.io Jam #31</span>
                </div>
              )}
            ></Card>
            <Card 
              title="A Short Walk In The Snow" 
              imageSrc={shortWalkInTheSnowImage}
              imageAlt="The title image for the game 'A Short Walk In The Snow'"
              hoverVideo={shortWalkInTheSnowVideo}
              shortDescription="Take a serene walk through a snow blanketed forest."
              playText="Play Now on itch.io"
              playUrl="https://hey-tack.itch.io/a-short-walk-in-the-snow"
              tags={(
                <div className="px-6 pt-2 pb-2">
                  <span className={`inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-black mb-2`}>Browser</span>
                  <span className={`inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2`}>Acerola Jam #0</span>
                </div>
              )}
            ></Card>
            <Card 
              title="The Legend of Basin: Clay of Memories" 
              imageSrc={legendOfBasinImage}
              imageAlt="The title image for the game 'The Legend of Basin: Clay of Memories'"
              hoverVideo={legendOfBasinVideo}
              shortDescription="A short RPG about throwing pots, and saving your island."
              playText="Play Now on itch.io"
              playUrl="https://hey-tack.itch.io/the-legend-of-basin-clay-of-memories"
              tags={(
                <div className="px-6 pt-2 pb-2">
                  <span className={`inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-black mb-2`}>Browser</span>
                  <span className={`inline-block bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2`}>Brackeys Game Jam 2024.2</span>
                </div>
              )}
            ></Card>
            <div className="stay-in-touch">
              <i>And more to come...</i>
            </div>
          </div>
        </CrossfadeContainer>
    );
  }