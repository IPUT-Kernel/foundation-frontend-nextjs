const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,  // ここを修正
                token: action.payload.token,  // ここを追加
                isFetching: false,
                error: false,
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    };
};

export default AuthReducer;
