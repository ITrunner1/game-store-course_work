import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

import { addToCart } from '../../redux/cartSlice';
import { Transition } from '../../components';
import { GameCover } from './GameCover';

export const GameCard = ({ game }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);   

    const addToCartHandler = (game) => { 
        let totalPrice = game.price;       
        dispatch(addToCart({...game, totalPrice}))
    }

    return (
        <div className="GameCard" key={ game.id }>  
            <Link to = {`/store/${game.id}` }>                
                <GameCover background_image={game.background_image} />
                <div className='Price'>                   
                    <Button 
                        onClick={() => { addToCartHandler(game) }}>
                        {t("add to cart")}
                    </Button>      
                    <span className="PriceNumber">{game.price}$</span>       
                </div>
            </Link>   
            <Link to = {`/store/${game.id}` }>  
                <motion.div 
                    className='Info'
                    whileHover={{ height: 170 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    > 
                        <span className ="Title">{game?.name}</span>
                        <div className="Genre">{game?.genre}</div> 
                        <AnimatePresence>               
                            {isHovered && (
                                <Transition className = "MoreInfo">                                
                                    <div className="Developer">
                                        <div className="Txt">{t("developer")}: {game.developers}</div>                                    
                                        <div className="Txt">{t("publisher")}: {game.publishers}</div>
                                        <div className="Txt">{t("platforms")}: {game.platforms}</div>                                    
                                     </div>  
                                </Transition>
                                )}                        
                        </AnimatePresence>            
                </motion.div> 
            </Link>     
        </div>
    )
}

export default GameCard;