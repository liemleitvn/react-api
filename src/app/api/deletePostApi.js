import Request from './Request'
import {ENPOINT} from "./api-env";


export default class DeletePostApi {

    static deletePost (token, id) {

        let urlApi = ENPOINT;

        urlApi += `/posts/${id}`;

        let opts = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return Request.delete(urlApi, opts);
    }

}