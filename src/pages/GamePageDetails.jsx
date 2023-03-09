import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { IoArrowDown,
         IoArrowUp,
         IoArrowBack
} from 'react-icons/io5';

import { Transition } from '../components';
import { addToCart } from '../redux/cartSlice';
import games from '../utils/games';
import GamePageDetailsSlider from '../components/GamePageDetailsSlider'

const GamePageDetails = () => {  
    const { t } = useTranslation(); 
    const dispatch = useDispatch();
    const { id } = useParams();        
    const game = games.find((game) => game.id === id);    
    const [isExpanded, setIsExpanded] = useState(false);    
    
    const addToCartHandler = (game) => { 
        let totalPrice = game.price;
        dispatch(addToCart({...game, totalPrice}))        
    }
    
    return (         
        <Transition className="GameDetails" direction="left"> 
            <div className="GameHeader flex align-start justify-between">                
                <Link className ="ToStore" to="/store">                    
                    <IoArrowBack className="Icon" />
                    {t("to store")}  
                </Link>
                <div className="GameName">{game.name}</div> 
            </div>              
            <Transition className="Grid grid" direction="left">               
                <GamePageDetailsSlider />                               
                    <Transition className="Info">
                        <div>                
                            <a href={game.link}>
                                {t("website")}: {game.name}
                            </a>
                        </div>
                        <p>{t("released")}: {game.release}</p>
                        <p>{t("platforms")}: {game.platforms}</p> 
                        <p>{t("genres")}: {game.genre}</p>  
                        <p>{t("developer")}: {game.developers}</p> 
                        <p>{t("publisher")}: {game.publishers}</p>
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
                                                {t(game.desc)}
                                            </div>
                                            <motion.div 
                                                className='Expand'
                                                layoutId="expand-button"
                                            >
                                                <button className="Button flex" onClick={() => setIsExpanded(false)}>{t("hide")} <IoArrowUp /></button>
                                            </motion.div> 
                                        </Transition>
                                        </>
                                        : <motion.div 
                                            className='Expand'
                                            layoutId="expand-button"
                                            >
                                            <button className="Button flex" onClick={() => setIsExpanded(true)}>{t("more")} <IoArrowDown /></button>
                                        </motion.div> 
                                    }
                            </motion.div>  
                            <div className="Price flex align-start justify-between">                                                                  
                                <Button 
                                    onClick={() => { addToCartHandler(game) }}>
                                    {t("add to cart")} 
                                </Button>
                                {game.price}$
                            </div>                                 
                    </Transition> 
            </Transition>        
        </Transition>
    );
}

export default GamePageDetails;