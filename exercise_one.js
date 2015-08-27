var oReq = new XMLHttpRequest();

// Current San Francisco Weather
var url = "http://api.openweathermap.org/data/2.5/weather?id=5391959";
// NOTE: If executing in the browser console, it must be on a http (not https) webpage.
// Otherwise, an error will probably occur. Don't worry about it.


oReq.open('GET', url);
oReq.send();

var weather = function () {
	if (oReq.weather.id === 802) {
		console.log("Oh snap, it might rain.");
	}
};






