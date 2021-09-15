import React from 'react';
import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cart} from "../../store/cart/slice";

const CartItem: React.FC<{item: {id: string, name: string, quantity: number, total: number, price: number}}> = (props) => {
  const { id, name, quantity, total, price } = props.item;

  const dispatch = useDispatch()

  const removeFromCartHandler = () => {
      dispatch(cart.removeItemFromCart(id));
  }

  const addToCartHandler = () => {
      dispatch(cart.addItemToCart({id, price, quantity, total, name}));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
