function parseQuery(query) {
    if (!query || !query.length)
        return {};
    var queryObj = {};
    var querys = query.split('&');
    querys.forEach(function (item) {
        var _a = item.split('='), key = _a[0], value = _a[1];
        if (queryObj[key]) {
            if (Array.isArray(queryObj[key])) {
                queryObj[key].push(value);
            }
            else {
                queryObj[key] = [queryObj[key], value];
            }
        }
        else {
            queryObj[key] = value;
        }
    });
    return queryObj;
}