import React, {Fragment, useEffect} from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './app/store';
import ui from "./store/ui/actions";
import Notification from "./components/UI/Notification";
import {fetchCartData} from "./store/cart/actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
    const cart = useSelector((state: RootState) => state.cart);
    const notification = useSelector((state: RootState) => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch]);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(ui.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            }));
            const response = await fetch('DATABASE_URL', {
                method: 'PUT',
                body: JSON.stringify(cart),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }

            dispatch(ui.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        }

        if (isInitial) {
            isInitial = false;
            return
        }

        if (cart.changed)  {
            sendCartData().catch((error) => {
                dispatch(ui.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Sending cart data failed!'
                }));
            })
        }

    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification &&
            <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />
            }
            <Layout>
                {showCart &&
                <Cart/>
                }
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
