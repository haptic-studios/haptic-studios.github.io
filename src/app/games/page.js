import CrossfadeContainer from '@/helpers/CrossfadeContainer';
import Card from '@/components/card';

export default function Games() {
    return (
        <CrossfadeContainer>
          <div className="games-title-container">
            <h1 className="spaced-letters">GAMES</h1>
          </div>
          <div className="game-list">
            <Card title="Split The World" shortDescription="Wield the legendary sword, and cleave the world asunder."></Card>
            <Card title="King of Lift" shortDescription="You've fallen in love with the pricess, do you have the strength to win the King's approval?"></Card>
            <Card title="Test Title" shortDescription="This is not the game that you're looking for."></Card>
          </div>
        </CrossfadeContainer>
    );
  }