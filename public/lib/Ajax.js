const Ajax = Object.assign(Object.create({}), {

    METHOD_HTTP: 'http',
    METHOD_HTTPS: 'https',

    baseUrl: null,
    method: 'http',
    jsonResponse: {},

    setBaseUrl(baseUrl){
        this.baseUrl = baseUrl;
        return this;
    },

    setMethod(method){
        this.method = method;
        return this;
    },

    get(url, params = ''){
        const that = this;
        return new Promise(function (resolve, reject) {
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET', `${that.method}://${that.baseUrl}${url}?${params}`, true);
            xhttp.onload = function () {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(Error(xhttp.statusText));
                }
            };
            xhttp.onerror = function () {
                reject(Error('network problem'));
            };
            xhttp.send();
        });
    },

    post(url, params = '', type = 'application/x-www-form-urlencoded'){
        const that = this;
        return new Promise(function (resolve, reject) {
            const xhttp = new XMLHttpRequest();
            xhttp.open('POST', `${that.method}://${that.baseUrl}${url}`, true);
            xhttp.onload = function () {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(Error(xhttp.statusText));
                }
            };
            xhttp.onerror = function () {
                reject(Error('network problem'));
            };
            xhttp.setRequestHeader('Content-Type', type);
            xhttp.send(params);
        });
    },

    put(url, json = '{}'){
        const that = this;
        return new Promise(function (resolve, reject) {
            const xhttp = new XMLHttpRequest();
            xhttp.open('PUT', `${that.method}://${that.baseUrl}${url}`, true);
            xhttp.onload = function () {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(Error(xhttp.statusText));
                }
            };
            xhttp.onerror = function () {
                reject(Error('network problem'));
            };
            xhttp.setRequestHeader('Accept', 'application/json');
            xhttp.send(json);
        });
    },

    httpBuildQuery(params = {}){
        let query = '';
        for(let idx in params){
            if(params.hasOwnProperty(idx)){
                query += `${idx}=${params[idx]}&`;
            }
        }
        query = query.substring(0, query.length - 1);
        return query;
    }
});
Ajax.setBaseUrl('localhost:3001');

