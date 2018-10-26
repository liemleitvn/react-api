import Request from './Request'
import {ENPOINT} from "./api-env";

export default class LoginApi {

    static login (data) {
        let urlApi = ENPOINT;
        urlApi += '/auth/login';
        let opts = {
            body: JSON.stringify(data)
        };

        return Request.send(urlApi,opts);
    }
}

