import request from '~/utils/requestUtils';

export const login = async (username, password) => {
    try {
        const res = await request.post('/auth/login', {
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
        const res = await request.post('/auth/register', {
            username,
            email,
            password,
        });
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};


export const getVerfyCode = async (userId) => {
    try {
        const res = await request.get('auth/get-verify-code?user_id=' + userId, {
            userId,
        });

        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
export const verfyCode = async (code, email) => {
    try {
        const res = await request.get('auth/verify?code=' + code + '&email=' + email, {
            code,
            email,
        });

        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
