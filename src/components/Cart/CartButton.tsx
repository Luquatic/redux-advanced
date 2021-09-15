import classes from './CartButton.module.css';

// redux
import {useDispatch, useSelector} from 'react-redux';
import ui from '../../store/ui/actions';
import {RootState} from "../../app/store";

const CartButton = () => {

    const dispatch = useDispatch();
    const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity)

    const toggleCartHandler = () => {
        dispatch(ui.toggle());
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
