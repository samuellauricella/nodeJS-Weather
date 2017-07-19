const request = require('request');
    
let getWeather = (lat,lng,callback) =>{
    request({
        url: `https://api.darksky.net/forecast/ebbf901ebe39dc61dde6e43e58692394/${lat},${lng}`,
        json:true
    },
    (error,response,body)=>{
        if(!error && response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })}
            else {
                callback('Unable to fetch weather')
            }
        });
}

module.exports.getWeather = getWeather
