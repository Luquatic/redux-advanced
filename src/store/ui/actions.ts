import {TOGGLE, ToggleAction} from './types';

const toggle = (): ToggleAction => {
    return {
        type: TOGGLE
    }
}

const ui = {
    toggle
}

export type UiActionTypes = ToggleAction;

export default ui;
