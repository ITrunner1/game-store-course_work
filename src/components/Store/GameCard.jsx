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
                                    <div className="py-1">{t("developer")}: {game.developers}</div>                                    
                                    <div className="py-1">{t("publisher")}: {game.publishers}</div>
                                    <div className="py-1">{t("platforms")}: {game.platforms}</div>                                    
                                </div>  
                            </Transition>
                        )}                        
                    </AnimatePresence>            
            </motion.div> 
        </Link>    
            <div className='Price'>
                {game.price}$
                <Button 
                    onClick={() => { addToCartHandler(game) }}>
                    {t("add to cart")}
                </Button>             
            </div>           
        </div>
    )
}

export default GameCard;