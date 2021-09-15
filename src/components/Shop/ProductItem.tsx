import React from 'react';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux';
import {cart} from '../../store/cart/cart-slice';

const ProductItem: React.FC<{id: string, name: string, price: number, description: string}> = (props) => {
  const { id, name, price, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
      dispatch(cart.addItemToCart({
        id,
        name,
        price
      }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
