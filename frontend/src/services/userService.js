import axios from "axios";

export const login = async (username, password) => {
    try {
        const res = await axios.post('/api/auth/login', {
            username,
            password,
        });
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};

export const register = async (username,email, password) => {
    try {
        const res = await axios.post('/api/auth/register', {
            username,
            email,
            password,
        });
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};


export const getVerifyCode = async (userId) => {
    try {
        const res = await axios.get('/api/auth/get-verify-code?user_id=' + userId, {
            userId,
        });

        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
export const verifyCode = async (code, email) => {
    try {
        const res = await axios.get('/api/auth/verify?code=' + code + '&email=' + email, {
            code,
            email,
        });

        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};