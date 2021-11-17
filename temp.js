var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://weather338.p.rapidapi.com/locations/search',
  params: {query: 'san fran', language: 'en-US'},
  headers: {
    'x-rapidapi-host': 'weather338.p.rapidapi.com',
    'x-rapidapi-key': '74e9a8130emshe9a017494aba03cp15b47djsn7d6cdf23cacc'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});