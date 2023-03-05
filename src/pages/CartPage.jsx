import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdTrash } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsCartXFill, BsArrowRight } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa'; 
import { Button } from '@mui/material';

import { getAllCarts, removeFromCart, clearCart } from '../redux/cartSlice';
import { Transition } from "../components";
import emptyCart from '../assets/emptyCart.png';
import games from '../utils/games';

const CartPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const carts = useSelector(getAllCarts);
    const totalPrice = carts.reduce((acc, carts) => acc += carts.price, 0)   
   
  
    if(carts.length === 0){
        return (
          <Transition className='EmptyCartPage' direction="left">
            <div className='Container'>
              <BsCartXFill className="Icon" alt = "" />
              <div className='Text'>{t("your shopping cart is empty")}</div>
              <Link to = '../store' className='ToStore'>                
                {t("go shopping now")}
                <BsArrowRight className="LinkIcon" />
              </Link>
            </div>
          </Transition>
        )
    }

    return ( 
        <Transition className="CartPage" direction="left">
            <div className="Container">              
              <div className='CartHeader'>
                <div className='CartColumns'>
                  <div className='CartColumn'>
                    <span className='CartColumnBody-txt'>{t("ID")}</span>
                  </div>
                  <div className='CartColumn'>
                    <span className='CartColumnBody-txt'>{t("image")}</span>
                  </div>
                  <div className='CartColumn'>
                    <span className='CartColumnBody-txt'>{t("Product")}</span>
                  </div>
                  <div className='CartColumn'>
                    <span className='CartColumnBody-txt'>{t("Price")}</span>
                  </div>
                  <div className='CartColumn'>
                    <span className='CartColumnBody-txt'>{t("Actions")}</span>
                  </div>
                </div>
              </div>

              <div className='CartBody'>
              {
                carts.map((cart, idx) => {
                return (
                  <div className='CartColumns' key = {cart.id}>
                    <div className='CartColumnBody'>
                      <span className='CartColumn-txt'>{idx + 1}</span>
                    </div>
                    <div className='CartColumnBody'> 
                      <img className='Image' src={cart.background_image} alt="" />
                    </div>
                    <div className='CartColumnBody'>
                      <span className='CartColumnBody-txt'>{cart.name}</span>
                      <div className="CartColumnBody-txt2">{t("release date")}: {cart.release}</div>
                    </div>     
                    <div className='CartColumnBody'>
                      <span className='CartColumnBody-txt'>{(cart.totalPrice)}$</span>
                    </div>
                    <div className='CartColumnBody'>
                      <Button type = "button" 
                        className='DeleteBtn'
                        startIcon={<FaTrashAlt />}
                        onClick={() => dispatch(removeFromCart(cart.id))}>
                          {t("delete")}
                      </Button>
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
                <div className='CartFooter-txt'>{totalPrice} $</div>                
              </div>              
            </div>
            <button type = "button" className='CheckoutBtn'>{t("check out")}</button>            
          </div>
        </Transition>
    );
}

export default CartPage;