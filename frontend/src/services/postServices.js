import axios from "axios";

export const getPosts = async () => {
    try {
        const res = await axios.get('/api/posts');
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
