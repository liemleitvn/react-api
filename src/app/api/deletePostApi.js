import Request from './Request'


export default class DeletePostApi {

    static deletePost (token, id) {

        let path = `posts/${id}`;

        let opts = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return Request.delete(path, opts);
    }

}