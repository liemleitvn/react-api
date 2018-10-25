import {ENPOINT} from "./api-env";
import $ from 'jquery';
import 'babel-polyfill';


export default class Request {

    /**
     * make query string from params object parameter
     * func encodeURIComponent: encode special characters eg: space - , - / - ? - : - @ .....
     * @param params
     * @param includeQuestionCharacter
     * @returns {string}
     */
    static mapQuery (params = {}, includeQuestionCharacter = false) {
        let esc = encodeURIComponent;

        return (includeQuestionCharacter?'?':'') + Object.keys(params)
            .map(k=>esc(k)+ "=" + esc(params[k]))
            .join('&');
    }

    /**
     * func send request to api url
     * method request: POST
     * @param path = path&query_string
     * @param opts = {headers{}&body{}&...}
     * @returns {Promise<any>}
     */
    static async send (path, opts = {}) {


        let headers = Object.assign(opts.headers || {}, {
            'Content-Type': 'application/json'
        });

        let urlApi = ENPOINT;

        let response = await fetch(
            `${urlApi}/${path}`,
            Object.assign({method: 'POST'}, opts, {headers})
        );

        if(response.status === 204) {
            return {'message': 'successful.'};
        }

        const data = await response.json();

        if(data.error) {
            console.log(data.error);
            return {};
        }

        return data;
    }

    /**
     * method request: GET
     * @param path
     * @param opts
     * @returns {Promise<any>}
     */
    static get(path, opts = {}) {
        return this.send(path, {...opts, method: 'GET'});
    }


    static delete(path, opts = {}) {

        return this.send(path, {...opts, method: 'DELETE'});
    }
}