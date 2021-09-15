import {createStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import uiReducer from '../store/ui/reducer';
import slice from '../store/cart/slice';

const rootReducer = combineReducers({
    ui: uiReducer,
    cart: slice.reducer
})

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store
