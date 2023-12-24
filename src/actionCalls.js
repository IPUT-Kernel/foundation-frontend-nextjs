import axios from "axios";

export const loginCall = async (userCreds, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("/v1/auth/login", userCreds);
        console.log("Response from server:", res.data);
        console.log("Token from response:", res.data.token); 
        dispatch({ 
            type: "LOGIN_SUCCESS", 
            payload: { user: res.data.user, token: res.data.token }
        });
    } catch (err) {
        dispatch({ type: "LOGIN_ERROR", payload: err });
    }
};