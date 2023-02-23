import { Transition } from '../components';
import { GameCard } from '../components/Store/GameCard';
import { useTranslation } from 'react-i18next';
import games from '../utils/games';
import genres from '../utils/genres';
import GamesList from '../components/Store/GameList';

const Store = () => { 
  const { t } = useTranslation();

  return (
    <Transition direction="right">
      <div className='store-title'>
        <h1>{t("games")}</h1>
      </div>       
      <GamesList /> 
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[0])}</h1>
            <div className="GameList">
              {
                games.filter(game => game.genre === genres[0]).map(catGamesOne => (
                 <GameCard game = {catGamesOne} /> ))
              } 
            </div>   
          </div>
      </div>
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[1])}</h1> 
            <div className="GameList">
              {
                  games.filter(game => game.genre === genres[1]).map(catGamesOne => (
                    <GameCard game = {catGamesOne} /> ))
              }
            </div>
        </div>
      </div>
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[2])}</h1> 
            <div className="GameList">
              {
                  games.filter(game => game.genre === genres[2]).map(catGamesOne => (
                    <GameCard game = {catGamesOne} /> ))
              }
            </div>
        </div>        
      </div>
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[3])}</h1> 
            <div className="GameList">
              {
                  games.filter(game => game.genre === genres[3]).map(catGamesOne => (
                    <GameCard game = {catGamesOne} /> ))
              }
            </div>
        </div>        
      </div>
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[4])}</h1> 
            <div className="GameList">
              {
                  games.filter(game => game.genre === genres[4]).map(catGamesOne => (
                    <GameCard game = {catGamesOne} /> ))
              }
            </div>
        </div>        
      </div>
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[5])}</h1> 
            <div className="GameList">
              {
                  games.filter(game => game.genre === genres[5]).map(catGamesOne => (
                    <GameCard game = {catGamesOne} /> ))
              }
            </div>
        </div>        
      </div>
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[6])}</h1> 
            <div className="GameList">
              {
                  games.filter(game => game.genre === genres[6]).map(catGamesOne => (
                    <GameCard game = {catGamesOne} /> ))
              }
            </div>
        </div>        
      </div>
      <div className="categories-item">
        <div className="title-md">
          <h1>{t(genres[7])}</h1> 
            <div className="GameList">
              {
                  games.filter(game => game.genre === genres[7]).map(catGamesOne => (
                    <GameCard game = {catGamesOne} /> ))
              }
            </div>
        </div>        
      </div>
    </Transition>
  );
}

export default Store;