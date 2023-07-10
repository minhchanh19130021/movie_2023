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
