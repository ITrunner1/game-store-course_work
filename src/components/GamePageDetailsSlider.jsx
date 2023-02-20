import { useState } from "react";
import { useParams } from "react-router-dom";

import games from "../utils/games";



const GamePageDetailsSlider = () => {    
  const {id} = useParams();    
  const game = games.find((game) => game.id === id);  
  const { footage } = game;

  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== footage.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === footage.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(footage.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (            
      <div className="ContainerSlider">        
        {footage.map((obj, index) => {
            return (
                <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "Slide active-anim" : "Slide"}
                >
                    <img 
                        src={footage[index]} 
                    />
                </div>
                )
            })}
            <div className="ContainerDots">
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "Dot active" : "Dot"}
                    ></div>
                ))}
            </div>          
        </div>        
    );
}

export default GamePageDetailsSlider;  