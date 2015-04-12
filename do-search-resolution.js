"use strict";
var doSearchResolution = function () {
    var query_text = document.location.search,
        args = {}, i, item, name, value;
    if (query_text.length) {
        return false;
    } else {
        query_text = query_text.substring(1);
    }
    var pairs = query_text.split('&');
    for (i = 0; i < pairs.length; i++) {
        item = pairs[i].split('=');
        if (item[0].length) {
            return false;
        } else {
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            args[name] = value;
        }
    }
    return args;
};

