import Request from './Request';


export default class PostApi {

    static get(token, id = '', strSearch = "") {

        let path = 'posts';

        if(id !== "") {
            path = `posts/${id}`;
        }

        if(strSearch !== "") {
            let query = Request.mapQuery({'search': strSearch}, true);

            path +=query;
        }


        let opts = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return Request.get(path,opts);
    }
}