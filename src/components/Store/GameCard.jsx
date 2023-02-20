import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Transition } from '../../components';
import { GameCover } from './GameCover';
import { GameBuy } from './GameBuy';

export const GameCard = ({ game }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="GameCard" key={ game.id }>  
        <Link to = {`/store/${game.id}` }>                   
            <GameCover background_image={game.background_image} />
            <motion.div 
                className='Info'
                whileHover={{ height: 170 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                > 
                    <span className ="Title fs-24">{game?.name}</span>
                    <div className="Genre">{game?.genre}</div> 
                    <AnimatePresence>               
                        {isHovered && (
                            <Transition className = "MoreInfo">                                
                                <div className="Developer fs-18">
                                    <div className="py-1">Developer: {game.developers}</div>                                    
                                    <div className="py-1">Publisher: {game.publishers}</div>
                                    <div className="py-1">Platforms: {game.platforms}</div>                                    
                                </div>  
                            </Transition>
                        )}                        
                    </AnimatePresence>            
            </motion.div>  
            <div className='Price'>{game.price}$</div>
        </Link>      
        </div>
    )
}

export default GameCard;