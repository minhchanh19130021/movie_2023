import request from '~/utils/requestUtils';

const controller = 'order';

export const saveNewOrder = async (orderId, accessToken) => {
    const newOrder = {
        orderId: orderId,
    };
    try {
        const load = await request.post(`/api/${controller}/add`, newOrder, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const checkUserIdInOrder = async (accessToken) => {
    try {
        const load = await request.get(`/api/${controller}/checkUserIdInOrder`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};
