import { GameCard } from "./GameCard";
import games from "../../utils/games";
import genres from '../../utils/genres';

const GamesList = () => {
  return (
    <div className='GameList'>
      {
        games.map(game => { 
          return (
            <GameCard key={game.id} game = {{...game}} />
          )
        })
      }
    </div>
  )
}

export default GamesList