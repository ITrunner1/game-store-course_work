import { SiCounterstrike } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const CartMessage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="CartMessage">
            <div className="CartMessage-icon">
                <SiCounterstrike />
            </div>
            <h6 className='Cart-Message-text'>{t("an item has been added to cart")}</h6>
        </div>
    );
}

export default CartMessage;