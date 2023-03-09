import { Transition } from '../components';
import { useTranslation } from 'react-i18next';
import GamesList from '../components/Store/GameList';

const Store = () => { 
  const { t } = useTranslation();

  return (
    <Transition direction="left">
      <div className='StoreTitle'>
        <h1>{t("games")}</h1>
      </div>       
      <GamesList />         
    </Transition>
  );
}

export default Store;