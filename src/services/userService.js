import axios from 'axios';
import { config } from '../_helpers/Constants';

class userService {
    login = async (username, password) => {
        const url = config.url.API_URL + '/users/authenticate';
        const body = JSON.stringify({ username, password });
        const params = {
            method: 'POST',
            url,
            data: body,
            headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*" },
        }
        return await axios(params);
    }

    signup = (user) => {

    }

    update = (id, user) => {

    }
}


export default new userService();