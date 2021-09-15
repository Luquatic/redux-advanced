import React from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

// models
import Item from "../../models/item";

// redux
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

const Cart = () => {

    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item: Item) =>
                    <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            name: item.name,
                            quantity: item.quantity,
                            price: item.price,
                            total: item.totalPrice
                        }}
                    />
                )}
            </ul>
        </Card>
    );
};

export default Cart;
