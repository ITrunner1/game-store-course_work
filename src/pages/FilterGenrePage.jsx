import { Transition } from '../components';
import { useParams } from 'react-router-dom';
import { GameCard } from '../components/Store/GameCard';
import { useTranslation } from 'react-i18next';
import games from '../utils/games';
import genres from '../utils/genres';

const Store = () => { 
  const { t } = useTranslation(); 
  const { genre } = useParams();

 console.log(genre);
  return (
    <Transition direction="right">                 
      <div className="FilterPage">        
          <h1>{t(genre)}</h1>
            <div className="GameList flex flex-wrap justify-around">
              {
                games.filter(game => game.genre === genre).map(catGamesOne => (
                 <GameCard game = {catGamesOne} /> ))
              }               
          </div>
      </div>      
    </Transition>
  );
}

export default Store;