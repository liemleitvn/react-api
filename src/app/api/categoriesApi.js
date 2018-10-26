import Request from './Request';
import {ENPOINT} from "./api-env";

export default class CategoriesApi {
    static getCategory(token, id = "", strSearch = "") {

        let urlApi = `${ENPOINT}/categories`;

        if(id !=="") {
            urlApi += `/${id}`;
        }

        if(strSearch !=="") {
            let query = Request.mapQuery({'search':strSearch}, true);
            urlApi+=query;
        }

        let opts = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return Request.get(urlApi,opts);

    }
}