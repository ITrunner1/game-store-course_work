import { useDispatch } from "react-redux";

import HomeSlider from "../components/HomeSlider";
import { useAuth } from '../hooks/use-auth';

const Home = () => {
    const dispatch = useDispatch();

    const { isAuth } = useAuth();

    return isAuth ? (
        <div className="slider-wrapper">            
           <HomeSlider />           
        </div>
    ) : ( 
        <div>
            <h1></h1>
        </div>
    );
}

export default Home;