 
 // import the built-in http module to issue calls to remote APIs
var http = require("http");
// retrieve the location parameter from the request
var location = request.parameters.location;
// curl -X POST  -F location=greenwood%20lake,%20ny -F apsws.time=1426704597962 -H 'Authorization: bearer Szc0MEMxNTk1NzpzY3JpcHRyOkM5MDk5MUFFMjhGN0VBQTc0ODVDNzMzRDA1QjM2QzMw' 'https://api.scriptr.io/weather'

//var location ="greenwood%20lake,%20ny";

var weatherService = "http://api.openweathermap.org/data/2.5/weather?q=" + location;
// invoke the weatherService third party API
var callResult = http.request({"url":weatherService});
// parse the result of the call using regular JSON object
var weatherInfo = JSON.parse(callResult.body);
var temperature = weatherInfo.main.temp;
var humidity = weatherInfo.main.humidity;
var wind=weatherInfo.wind.speed;
// return the result of the function call
 return getAmbianceConfiguration(temperature, humidity);
// return (wind);
 
// define a bespoke function
function getAmbianceConfiguration(temp, humidity) {
  var matrix = {
    "cold-dry": "warm",
    "cold-humid": "warm+",
    "cool-dry": "cosy",
    "cool-humid": "cosy+",
    "hot-dry": "chill",
    "hot-humid": "chill+"
  }
  var tempCategory = (temp < 18) ? "cold" : (temp >= 18 && temp <=25) ? "cool" : "hot";
  var humitityCategory = humidity < 70 ? "dry" : "humid";
  return matrix[tempCategory + "-" + humitityCategory];  
}          				   				   				   							