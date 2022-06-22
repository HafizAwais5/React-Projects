import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.style.scss';

const CartIcon = ()=> {

    const {isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext);
    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;