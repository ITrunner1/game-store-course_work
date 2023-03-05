import { useParams } from "react-router-dom";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import games from "../utils/games";

const GamePageDetailsSlider = () => {    
  const { id } = useParams();    
  const game = games.find((game) => game.id === id); 

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }; 

    return ( 
        <div className="slider"> 
            <div className="container">
                <div className="slider-container">
                    <Slider {...settings}>                
                        <div className="slider-item">                    
                            <img src={game.footage[0]} alt="image1" />
                        </div>
                        <div className="slider-item">                    
                            <img src={game.footage[1]} alt="image1" />
                        </div> 
                        <div className="slider-item">                    
                            <img src={game.footage[2]} alt="image1" />
                        </div> 
                        <div className="slider-item">                    
                            <img src={game.footage[3]} alt="image1" />
                        </div> 
                    </Slider>
                </div>
            </div>
        </div>  
    );
}

export default GamePageDetailsSlider;  