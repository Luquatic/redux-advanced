import ui from '../ui/actions';
import cart from './slice';
import {Dispatch} from "@reduxjs/toolkit";

export const fetchCartData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await fetch('DATABASE_URL');

            if (!response.ok) {
                throw new Error('Could not fetch cart data')
            }

            return await response.json();
        }

        try {
            const data = await fetchData();
            dispatch(cart.actions.replaceCart({
                items: data.items || [],
                totalQuantity: data.totalQuantity,
            }));
        } catch (e) {
            dispatch(
                ui.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Fetching cart data failed'
                })
            )
        }
    }


}
