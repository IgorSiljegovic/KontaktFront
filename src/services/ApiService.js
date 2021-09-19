import axios from "axios";

export default {
    postData(url, payload) {
        return axios.post(url, payload);
    },
    getData(url) {
        return axios.get(url);
    }
}