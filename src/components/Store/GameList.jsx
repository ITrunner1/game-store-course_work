import { GameCard } from "./GameCard";
import games from "../../utils/games";

const GamesList = () => {
  return (
    <div className='GameList flex flex-wrap justify-around'>
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