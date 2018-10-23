import Request from './Request';


export default class PostApi {

    static get(token, id = '') {

        let path = 'posts';

        if(id !== "") {
            path = `posts/${id}`;
        }

        let opts = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return Request.get(path,opts);
    }
}