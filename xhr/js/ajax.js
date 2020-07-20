class Ajax {

    callbackfunc(fn) {
        this.xhr.onload(fn);
    }
    constructor(baseurl) {
        this.xhr = new XMLHttpRequest();
        this.xhr.responseType = "json";
        this.baseurl = baseurl;
    }

}

let xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open("GET", "http://localhost:5000/api/requests/1", true);
xhr.onload = function() {
console.log(xhr.response);
}
xhr.send();