import {ENPOINT, VERSION} from "./api-env";
import $ from 'jquery';
import 'babel-polyfill';


export default class Request {

    makeUrl (path, prams = "") {
        let urlApi = ENPOINT;
        if(VERSION !== "") {
            urlApi = `${urlApi}/${VERSION}`;
        }

        urlApi = `${urlApi}/${path}`;

        if(Object.keys(prams).length !== 0) {
            let query_string = $.param(params)

            urlApi = `${urlApi}?${query_string}`;
        }

        return urlApi;

    }

    getHeaders() {

    }

    async getTokenLogin (path, data, params = "") {
        console.log(path, data)
        let urlApi = this.makeUrl(path, params);

        let headers = {'Content-type': 'application/json'};

        try {
            let response = await fetch(urlApi, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (e) {
            console.error(e);
        }
    }
}