const getUrlParams = () => {
    let url = document.URL;
    let parms = url.split("?");
    let kvs = parms[1].split("&");
    let json = {}
    for(let kv of kvs) {
        kv = kv.split("=");
        json[kv[0]]=kv[1];
    }   
    return json;
}