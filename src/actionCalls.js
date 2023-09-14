import axios from "axios";

export const loginCall = async (userCreds, dispatch) => {
    console.log("loginCall function called");  // このログを追加
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("api/auth/login", userCreds);
        console.log("Response from server:", res.data);  // このログを追加
        console.log("Token from response:", res.data.token);  // ここでログを出力
        dispatch({ 
            type: "LOGIN_SUCCESS", 
            payload: { user: res.data.user, token: res.data.token }
        });
    } catch (err) {
        dispatch({ type: "LOGIN_ERROR", payload: err });
    }
};