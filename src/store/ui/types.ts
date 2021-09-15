export const TOGGLE = 'TOGGLE';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'

export interface ToggleAction {
    type: typeof TOGGLE;
}

export interface ShowNotificationAction {
    type: typeof SHOW_NOTIFICATION;
    payload: {status: string, title: string, message: string}
}
