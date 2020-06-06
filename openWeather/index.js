let request = require('request');

let apiKey = '258164417d5e03c9b4c03804d050b426';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

let weather = JSON.parse(body)
let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
               console.log(message);

               
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
