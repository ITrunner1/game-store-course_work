import React from 'react';
import { Transition } from '../components';
import games from '../utils/games';
import GameCard from '../components/Store/GameCard';

import Menu from '../layouts/Menu';
const Store = () => { 
  return (
    <Transition direction="right">
      <div className='store-title'>
        <h1>Games</h1>
      </div>
      <div className="GameList">
          { games.map(game => <GameCard game={game} key={game.id}/>) }
      </div>
    </Transition>
  );
}

export default Store;