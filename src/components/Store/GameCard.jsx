import { GameCover } from './GameCover';

const GameCard = ({ game }) => {
    return (               
        <div className="GameCard">                     
            <GameCover background_image={game.background_image} />
            <div className='Info'>  
                <span className ='Title'>{game.name}</span>                
            </div>     
            <div className='Button'>                
            </div>    
        </div>        
    );
}

export default GameCard;