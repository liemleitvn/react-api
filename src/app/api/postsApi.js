import Request from './Request';
import {ENPOINT} from "./api-env";


export default class PostApi {

    static get(token, id = '', strSearch = "") {

        let urlApi = ENPOINT;

        urlApi += '/posts';

        if(id !== "") {
            urlApi += `/${id}`;
        }

        if(strSearch !== "") {
            let query = Request.mapQuery({'search': strSearch}, true);

            urlApi +=query;
        }


        let opts = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return Request.get(urlApi,opts);
    }

    /**
     * Insert post
     * @param token
     * @param title
     * @param category
     * @param content
     */
    static create(token, title, category, content) {
        let url = `${ENPOINT}/posts`;

        let opts = {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                'title': title,
                'category': category,
                'content': content
            })
        };

        return Request.send(url,opts);
    }

}