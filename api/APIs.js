import axios from "axios";
import env from "../env";

const token = env.TOKEN;
const api = axios.create({
    baseURL: 'https://api.apito.io/secured/rest/budget_app_br7v4',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json"
    }
});
export const getReceipts = () => {
    // let data;
    let data = api.get('/receipts')
        .then((response) => {
            return response.data
        })
        .catch((error) => {
           throw new Error;
        })
        console.log("api: ",data)
    return data;
}

