import {SHOW_NOTIFICATION, ShowNotificationAction, TOGGLE, ToggleAction} from './types';

const toggle = (): ToggleAction => {
    return {
        type: TOGGLE
    }
}

const showNotification = (payload: {status: string, title: string, message: string}): ShowNotificationAction => {
    return {
        type: SHOW_NOTIFICATION,
        payload: payload
    }
}

const ui = {
    toggle,
    showNotification
}

export type UiActionTypes = ToggleAction | ShowNotificationAction;

export default ui;
