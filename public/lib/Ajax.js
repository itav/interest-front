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

    get(url, params = {}){
        const that = this;
        return new Promise(function (resolve, reject) {
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET', `${that.method}://${that.baseUrl}${url}`, true);
            xhttp.onload = function () {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(Error(xhttp.statusText));
                }
            };
            xhttp.onerror = function () {
                reject(Error('network problem'))
            };
            xhttp.send();
        })
    }
});
