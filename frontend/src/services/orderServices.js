import request from '~/utils/requestUtils';

const controller = 'order';

export const saveNewOrder = async (orderId, userId) => {
    const newOrder = {
        orderId: orderId,
        userId: userId,
    };
    try {
        const load = await request.post(`/${controller}/add`, newOrder, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const checkUserIdInOrder = async (userId) => {
    try {
        const load = await request.get(`/${controller}/checkUserIdInOrder/${userId}`);
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};
