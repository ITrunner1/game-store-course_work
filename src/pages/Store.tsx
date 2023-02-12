import React from 'react';
import { Transition } from '../components';
import games from '../utils/games';
import GameCard from '../components/Store/GameCard';

const Store = () => { 
  return (
    <Transition className="GameList" direction="right"> 
    <div className="GameList">           
        { games.map(game => <GameCard game={game} key={game.id}/>) }
    </div>
    </Transition>
  );
}

export default Store;