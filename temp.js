var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London,uk',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: 'imperial',
    mode: 'xml'
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '74e9a8130emshe9a017494aba03cp15b47djsn7d6cdf23cacc'
  }
};

// const x =  ""
axios.request(options).then(async function (res) {
  console.log(res)
}).catch(function (error) {
	console.error(error);
});

