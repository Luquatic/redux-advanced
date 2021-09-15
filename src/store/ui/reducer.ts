import {UiActionTypes} from './actions';

export type UiState = {
    cartIsVisible: boolean
}

const initialState: UiState = {
    cartIsVisible: false
};

function uiReducer(state: UiState = initialState, action: UiActionTypes): UiState {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                cartIsVisible: !state.cartIsVisible
            };
        default:
            return {
                ...state
            };
    }
}

export default uiReducer;
