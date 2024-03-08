//Running javascript to GET the atricle from a wikipedia page

function createElement(data) {
    const p = document.createElement('p');
    p.innerText = data;
    document.body.append(p);
}

function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    req.send();
    req.onload = function() {
        const response = JSON.parse(req.responseText);
        const page = response.query.pages;
        callback(page[Object.keys(page)[0]].extract)
    };
}

queryWikipedia(createElement);