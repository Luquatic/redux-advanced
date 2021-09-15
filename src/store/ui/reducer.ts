import {UiActionTypes} from './actions';

export type UiState = {
    cartIsVisible: boolean,
    notification?: {
        status: string,
        title: string,
        message: string
    }
}

const initialState: UiState = {
    cartIsVisible: false,
    notification: undefined
};

function uiReducer(state: UiState = initialState, action: UiActionTypes): UiState {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                cartIsVisible: !state.cartIsVisible
            };
        case 'SHOW_NOTIFICATION':
            return {
                ...state,
                notification: action.payload
            }
        default:
            return {
                ...state
            };
    }
}

export default uiReducer;
