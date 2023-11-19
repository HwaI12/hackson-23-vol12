import axios from "axios";

const Domain = "http://localhost:3000";

// get methodでのレスポンスを返す関数
const getResponse = async (endpoint) => {
    try {
        const res = await axios.get(Domain + endpoint);
        return res.data;
    } catch (e) {
        throw e;
    }
}

// post methodでデータを送信し,レスポンスを返す関数
const postResponse = async (endpoint, data) => {
    try {
        const res = await axios.post(Domain + endpoint, data);
        return res.data;
    } catch (e) {
        throw e;
    }
}


export {getResponse, postResponse};