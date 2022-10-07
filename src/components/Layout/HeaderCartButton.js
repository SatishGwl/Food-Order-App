import {useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnHighLighted] = useState(false)
  const cartCtx = useContext(CartContext)
  const numOfcartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  const {items} = cartCtx;
  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump: ''}`;
  useEffect(()=>{
    if (items.length === 0){
      return;
    }
    setBtnHighLighted(true)
    const timer = setTimeout(()=>{
      setBtnHighLighted(false);
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  },[items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfcartItems}</span>
    </button>
  );
};

export default HeaderCartButton;