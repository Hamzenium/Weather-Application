const request = require('request');

const geolocation = (location) => {

const access_token = 'pk.eyJ1IjoiaGFtemFzb2hhaWwyOSIsImEiOiJjbGUzdnI5ZmEwNmtlM3dwODQ1NzI5aWIyIn0.4ubc0fmsjzg6IenrZqZK1w';
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${access_token}`;

request({ url: url ,json: true }, (error, respond, body) => {
  if (error) { 
    return console.log(error)
}
  else{
    const x = body.features[0].center[1]
    const y = body.features[0].center[0]
    console.log(x,y)
};
})
}

module.exports = geolocation