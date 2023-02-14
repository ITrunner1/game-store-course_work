import { useSelector } from 'react-redux';
import { Transition } from '../components';
import games from '../utils/games';
import GameCard from '../components/Store/GameCard';
import Menu from '../layouts/Menu';
import genres from '../utils/genres';
import GamesList from '../components/Store/GameList';

const Store = () => { 

  return (
    <Transition direction="right">
      <div className='store-title'>
        <h1>Games</h1>
      </div>       
      <GamesList /> 
      <div className="categories-item">
        <div className="title-md">
          <h1>{genres[0]}</h1>
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
          <h1>{genres[1]}</h1> 
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
          <h1>{genres[2]}</h1> 
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
          <h1>{genres[3]}</h1> 
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
          <h1>{genres[4]}</h1> 
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
          <h1>{genres[5]}</h1> 
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
          <h1>{genres[6]}</h1> 
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
          <h1>{genres[7]}</h1> 
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