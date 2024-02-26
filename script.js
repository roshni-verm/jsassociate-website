
const options = {method: 'GET'};

fetch('https://emailvalidation.abstractapi.com/v1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

const url = "https://emailvalidation.abstractapi.com/v1/?api_key=840a8816cfc2482eaba373c1c03ff307&email=kumariroshni1532@gmail.com"

httpGetAsync(url)