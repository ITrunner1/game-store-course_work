import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoArrowDown,
         IoArrowUp 
} from 'react-icons/io5';

import { Transition } from '../components';
import games from '../utils/games';
import GamePageDetailsSlider from '../components/GamePageDetailsSlider'


const GamePageDetails = () => {   
    const {id} = useParams();    
    const game = games.find((game) => game.id === id);
    const [isExpanded, setIsExpanded] = useState(false);  

    return (         
        <Transition className="GameDetails" direction="left"> 
            <div className="Header">                
                <div><Link to="/store">To store</Link></div>
                <div className="GameName">{game.name}</div> 
            </div>              
            <Transition className="Grid" direction="left">               
                <GamePageDetailsSlider />                               
                    <Transition className="Info">
                        <div>                
                            <a href={game.link}>
                                {game.name} Website
                            </a>
                        </div>
                        <p>Released: {game.release}</p>
                        <p>Platforms: {game.platforms}</p> 
                        <p>Genres: {game.genre}</p>  
                        <p>Developers: {game.developers}</p> 
                        <p>Publishers: {game.publishers}</p>
                            <motion.div
                                className="GameDescription"
                                initial={false}
                                animate={{ minHeight: isExpanded ? '220px' : '60px'}}
                            >
                                {isExpanded
                                    ?   <>
                                        <Transition 
                                            key="expanded"
                                            className="Expanded"
                                            direction="up"
                                            distance={30}
                                        >                             
                                            <div className="About">
                                                {game.desc}
                                            </div>
                                            <motion.div 
                                                className='Expand'
                                                layoutId="expand-button"
                                            >
                                                <button className="Button" onClick={() => setIsExpanded(false)}>Hide <IoArrowUp /></button>
                                            </motion.div> 
                                        </Transition>
                                        </>
                                        : <motion.div 
                                            className='Expand'
                                            layoutId="expand-button"
                                            >
                                            <button className="Button" onClick={() => setIsExpanded(true)}>More <IoArrowDown /></button>
                                        </motion.div> 
                                    }
                            </motion.div>  
                            <div className="Price">
                                ${game.price}
                                     <Transition className="Added">
                                        Added 
                                    </Transition>
                                     <button>
                                        Add to cart 
                                    </button>
                            </div>                                 
                    </Transition> 
            </Transition>        
        </Transition>
    );
}

export default GamePageDetails;