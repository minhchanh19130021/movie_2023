import request from '~/utils/requestUtils';

export const getPosts = async () => {
    try {
        const res = await request.get('posts');
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
