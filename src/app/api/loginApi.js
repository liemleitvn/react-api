import Request from './Request'

export default class LoginApi {

    static login (data) {
        let path = 'auth/login';
        let opts = {
            body: JSON.stringify(data)
        };

        return Request.send(path,opts);

    }
}

