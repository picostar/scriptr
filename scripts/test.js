 
 var http = require("http");
		var ip = request.headers["x-forwarded-for"];
		var host = request.parameters.host;
//		var iplookupUrl = "http://pip.im:8080/json/" + host;
		var iplookupUrl = "http://pip.im:8080/json/" + ip;
		var response = http.request({url: iplookupUrl});

return response;

// return http + " " + ip +" " + iplookupUrl;
   				   				   				   							