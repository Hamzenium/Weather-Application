const request = require('request');

const getweather = (location) => {
const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  qs: {q: location},
  headers: {
    'X-RapidAPI-Key': '67a0bd7eb4msh2bb6e8017a4e4fep10776ejsnaceb9ce646e5',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    useQueryString: true
  }
};
request(options, function (error, response, body) {
	if (error) throw new Error(error);
    else{
        const data = JSON.parse(body)
        const temperature = data.current.temp_c
        const name = data.location.name
        const wind = data.current.wind_kph
        const humidity = data.current.humidity
        console.log("For "+name+" the temperature is "+temperature+" degree with the wind speed almost "+wind+" kph; moreover the humdidity is "+humidity+" g/m3.")

    }

});
}
module.exports = getweather

