import axios from "axios";

export const loginCall = async (userCreds, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("api/auth/login", userCreds);
        console.log("Token from response:", res.data.token);  // ここでログを出力
        dispatch({ 
            type: "LOGIN_SUCCESS", 
            payload: { user: res.data.user, token: res.data.token }
        });
    } catch (err) {
        dispatch({ type: "LOGIN_ERROR", payload: err });
    }
};