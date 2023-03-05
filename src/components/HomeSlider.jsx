import { sliderImgs } from "../utils/images";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSlider = () => {   

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
        <div className="sliderhome">         
          <div className="container">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slider-item">
                  <img src={sliderImgs[0]} alt="image1" />
                </div>
                <div className="slider-item">
                  <img src={sliderImgs[1]} alt="image2" />
                </div>
                <div className="slider-item">
                  <img src={sliderImgs[2]} alt="image3" />
                </div>
              </Slider>
            </div>
          </div>                  
        </div>
    );
}

export default HomeSlider;