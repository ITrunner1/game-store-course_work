import { GameCover } from './GameCover';
import { GameBuy } from './GameBuy';


const GameCard = ({ game }) => {

    return (               
        <div className="GameCard">                     
            <GameCover background_image={game.background_image} />
            <div className='Info'>  
                <span className ='Title'>{game.name}</span> 
                
            </div>     
            <GameBuy game={game}/> 
        </div>        
    );
}

export default GameCard;