import { useSelector, useDispatch } from 'react-redux';
import { IoMdTrash } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getAllCarts, removeFromCart, clearCart, getCartTotal } from '../redux/cartSlice';
import { Transition } from "../components";

const CartPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const carts = useSelector(getAllCarts);
    const { totalAmount } = useSelector((state) => state.cart);

    if(carts.length === 0){
        return (
          <Transition className='EmptyCartPage' direction="left">
            <div className='Container'>
              <img src = '' alt = "" />
              <span className='Text'>{t("your shopping cart is empty")}</span>
              <Link to = 'store' className='Btn'>{t("go shopping now")}</Link>
            </div>
          </Transition>
        )
    }

    return ( 
        <Transition className="CartPage" direction="left">
            <div className="Container">              
              <div className='CartHeader'>
                <div className='Columns fs-26'>
                  <div className='cart-cth'>
                    <span className='CartColumnBody-txt'>{t("ID")}</span>
                  </div>
                  <div className='cart-cth'>
                    <span className='CartColumnBody-txt'>{t("image")}</span>
                  </div>
                  <div className='cart-cth'>
                    <span className='CartColumnBody-txt'>{t("Product")}</span>
                  </div>
                  <div className='cart-cth'>
                    <span className='CartColumnBody-txt'>{t("Price")}</span>
                  </div>
                  <div className='cart-cth'>
                    <span className='CartColumnBody-txt'>{t("Actions")}</span>
                  </div>
                </div>
              </div>

              <div className='CartBody'>
              {
                carts.map((cart, idx) => {
                return (
                  <div className='Columns fs-22' key = {cart?.id}>
                    <div className='CartColumnBody'>
                      <span className='CartColumn-txt'>{idx + 1}</span>
                    </div>
                    <div className='CartColumnBody'> 
                      <img className='Image' src={cart.background_image} alt="" />
                    </div>
                    <div className='CartColumnBody'>
                      <span className='CartColumnBody-txt'>{cart.name}</span>
                    </div>     
                    <div className='CartColumnBody'>
                      <span className='CartColumnBody-txt'>{(cart.totalPrice)}</span>
                    </div>
                    <div className='CartColumnBody'>
                      <button type = "button" className='DeleteBtn' onClick={() => dispatch(removeFromCart(cart?.id))}>{t("delete")}</button>
                    </div>
                  </div>
                )
              })
            }
            </div>

            <div className='CartFooter flex align-start justify-between'>
              <div className='CartFooterBlock'>
                <button
                  type='button'
                  className='ClearCartBtn'
                  onClick={() => dispatch(clearCart())}
                  >
                    <span className='Icon'><IoMdTrash /></span>
                    <span>{t("clear cart")}</span>
                </button>
              </div>

              <div className='CartFooterBlock'>
                <div className='CartFooter-txt'>${totalAmount}</div>                
              </div>
              
            </div>
            <button type = "button" className='checkout-btn'>{t("check out")}</button>
          </div>
        </Transition>
    );
}

export default CartPage;