import { useParams } from 'react-router-dom';

import games from '../utils/games';
import GameCard from '../components/Store/GameCard';
import { Transition } from '../components';

const GamesSearch = () => {
  window.scrollTo(0, 0);  

  const { searchTerm } = useParams();
  
  return (
    <Transition direction="left">
      <div className='GameList flex flex-wrap justify-around'>
        {          
          games.filter((game) => {
            return searchTerm.toLowerCase() === "" ? game : game.name.toLowerCase().includes(searchTerm)                                         
            }).map((game) => (
              <GameCard key={game.id} game = {game} /> 
        ))}  
        {            
          games.filter((game) => {
            return searchTerm === "" ? game : game.name.includes(searchTerm)                                         
          }).map((game) => (
            <GameCard key={game.id} game = {game} /> 
        ))} 
        {            
          games.filter((game) => {
            return searchTerm.toLowerCase() === "" ? game : game.developers.toLowerCase().includes(searchTerm)
            }).map((game) => (
              <GameCard key={game.id} game = {game} /> 
        ))} 
        {            
          games.filter((game) => {
            return searchTerm.toLowerCase() === "" ? game : game.publishers.toLowerCase().includes(searchTerm)
            }).map((game) => (
              <GameCard key={game.id} game = {game} /> 
        ))}
        {            
          games.filter((game) => {
            return searchTerm.toLowerCase() === "" ? game : game.platforms.toLowerCase().includes(searchTerm)
          }).map((game) => (
            <GameCard key={game.id} game = {game} /> 
        ))} 
      </div>
    </Transition>
  );
};

export default GamesSearch;