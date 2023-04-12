import Axios from "axios";

console.log("========= BACKEND IP =============");
console.log(process.env.REACT_APP_BACKEND);

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/api/v1`,
    withCredentials: true,
});

export default axios;
