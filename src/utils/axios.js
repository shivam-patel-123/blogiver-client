import Axios from "axios";

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/api/v1`,
    withCredentials: true,
});

export default axios;
