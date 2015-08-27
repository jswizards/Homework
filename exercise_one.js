var oReq = new XMLHttpRequest();
oReq.onreadystatechange = weather;

// Current San Francisco Weather
var url = "http://api.openweathermap.org/data/2.5/weather?id=5391959";
// NOTE: If executing in the browser console, it must be on a http (not https) webpage.
// Otherwise, an error will probably occur. Don't worry about it.


oRep.open('GET', url);
oRep.send();

oReq.weather = function () {
	if (oReq.weather.id === 802) {
		console.log("Oh snap, it might rain.");
	}
};






