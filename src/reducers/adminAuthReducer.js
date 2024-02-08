export const adminReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LoginAdminRequest':
            return {loading: true};
        case 'LoginAdminSuccess':
            return {loading: false, admin: action.payload, token: action.token, isAdminAuthenticated: true};
        case 'LoginAdminFailure':
            return {loading: false, error: action.payload, isAdminAuthenticated: false};
        case 'LogoutAdminRequest':
            return {loading: true};
        case 'LogoutAdminSuccess':
            return {loading: false,
                user: action.payload,
                isAuthenticated: true};
        case 'LogoutAdminFailure':
            return {loading: false,
                error: action.payload,
                isAuthenticated: false};
        default:
            return state;
    }
}