import React, {useEffect} from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

// redux
import {useSelector} from 'react-redux';
import {RootState} from './app/store';

function App() {
    const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
    const cart = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        fetch('DATABASE_URL', {
            method: 'PUT',
            body: JSON.stringify(cart),
        });
    },  [cart]);

    return (
        <Layout>
            {showCart &&
            <Cart/>
            }
            <Products/>
        </Layout>
    );
}

export default App;
